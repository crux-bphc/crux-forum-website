interface BoundingBoxProps {
    children: React.ReactNode
}

const BoundingBox: React.FC<BoundingBoxProps> = ({children}) => {
    return (
        <>
            <div className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
                <div className="px-4 py-2 lg:pt-1">
                    {children}
                </div>
            </div>
        </>
    )
}

export default BoundingBox;