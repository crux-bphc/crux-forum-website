import React from 'react';

type ScrollBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  containerClass?: string;
};

const ScrollBarContainer: React.FC<ScrollBarProps> = ({
  className,
  children,
  containerClass,
  ...props
}) => {
  const SCROLL_BOX_MIN_HEIGHT = 20;

  const scrollHostRef = React.useRef<HTMLDivElement>(null);

  const [hovering, setHovering] = React.useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = React.useState(
    SCROLL_BOX_MIN_HEIGHT
  );
  const [scrollBoxTop, setScrollBoxTop] = React.useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = React.useState(0);
  const [isDragging, setDragging] = React.useState(false);

  const handleMouseIn = React.useCallback(() => {
    setHovering(true);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    setHovering(false);
  }, []);

  const handleDocumentMouseUp = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();

        const scrollHostElement = scrollHostRef.current!;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        const deltaY = e.clientY - lastScrollThumbPosition;
        const percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      setScrollThumbPosition(e.clientY);
      setDragging(true);
    },
    []
  );

  const handleScroll = React.useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current!;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop = (scrollTop / scrollHeight) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, []);

  React.useEffect(() => {
    const scrollHostElement = scrollHostRef.current!;
    const { clientHeight, scrollHeight } = scrollHostElement;

    console.log(clientHeight, scrollHeight, scrollHostElement.offsetHeight);

    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT
    );

    setScrollBoxHeight(scrollThumbHeight);
    scrollHostElement.addEventListener('scroll', handleScroll, true);

    return function cleanup() {
      scrollHostElement.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);

    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div
      className={`scrollhost-container ${containerClass}`}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
    >
      <div
        ref={scrollHostRef}
        className={`scrollhost overflow-y-scroll ${className}`}
        {...props}
      >
        {children}
        <div
          className='scrollbar'
          style={{ opacity: hovering || isDragging ? 1 : 0 }}
        >
          <div
            className='scroll-thumb'
            style={{ height: scrollBoxHeight, top: scrollBoxTop }}
            onMouseDown={handleScrollThumbMouseDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBarContainer;
