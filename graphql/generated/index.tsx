import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateEventInputType = {
  date: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  meetLink: Scalars['String'];
  name: Scalars['String'];
  venue: Scalars['String'];
};

export type CreateNoticeInputType = {
  attachedFiles?: InputMaybe<Array<Scalars['String']>>;
  attachedImages?: InputMaybe<Array<Scalars['String']>>;
  body: Scalars['String'];
  isEvent: Scalars['Boolean'];
  time: Scalars['String'];
  title: Scalars['String'];
  topics?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateTestType = {
  name: Scalars['String'];
};

export type EditProfileInputType = {
  bio?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferences?: InputMaybe<EditProfilePreferencesType>;
  profilePicture?: InputMaybe<Scalars['String']>;
};

export type EditProfilePreferencesType = {
  darkmode: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
  roundup: Scalars['Boolean'];
};

export type EventType = {
  __typename?: 'EventType';
  _id: Scalars['ID'];
  date: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  linkedNotice: NoticeType;
  meetLink: Scalars['String'];
  name: Scalars['String'];
  reportedBy?: Maybe<Array<UserType>>;
  venue: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNotice: Scalars['Boolean'];
  createTest: Scalars['Boolean'];
  deleteSingleEvent: Scalars['Boolean'];
  deleteSingleNotice: Scalars['Boolean'];
  deleteSingleReply: Scalars['Boolean'];
  deleteSingleTest: Scalars['Boolean'];
  deleteSingleTopic: Scalars['Boolean'];
  deleteSingleUser: Scalars['Boolean'];
  dislike: Scalars['Boolean'];
  finishRegistration: Scalars['Boolean'];
  like: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  report: Scalars['Boolean'];
  reportEvent: Scalars['Boolean'];
  share: Scalars['Boolean'];
  subscribeEvent: Scalars['Boolean'];
  subscribeTopic: Scalars['Boolean'];
  unsubscribeEvent: Scalars['Boolean'];
  unsubscribeTopic: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationCreateNoticeArgs = {
  events: Array<CreateEventInputType>;
  notice: CreateNoticeInputType;
};


export type MutationCreateTestArgs = {
  input: CreateTestType;
};


export type MutationDeleteSingleEventArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleNoticeArgs = {
  noticeId: Scalars['String'];
};


export type MutationDeleteSingleReplyArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleTestArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleTopicArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSingleUserArgs = {
  id: Scalars['String'];
};


export type MutationDislikeArgs = {
  noticeId: Scalars['String'];
};


export type MutationFinishRegistrationArgs = {
  userData: UserRegisterType;
};


export type MutationLikeArgs = {
  noticeId: Scalars['String'];
};


export type MutationReportArgs = {
  noticeId: Scalars['String'];
};


export type MutationReportEventArgs = {
  eventId: Scalars['String'];
};


export type MutationShareArgs = {
  noticeId: Scalars['String'];
};


export type MutationSubscribeEventArgs = {
  eventId: Scalars['String'];
};


export type MutationSubscribeTopicArgs = {
  topicID: Scalars['String'];
};


export type MutationUnsubscribeEventArgs = {
  eventId: Scalars['String'];
};


export type MutationUnsubscribeTopicArgs = {
  topicID: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: EditProfileInputType;
};

export type NoticeType = {
  __typename?: 'NoticeType';
  _id: Scalars['ID'];
  attachedFiles?: Maybe<Array<Scalars['String']>>;
  attachedImages?: Maybe<Array<Scalars['String']>>;
  body: Scalars['String'];
  dislikeCount: Scalars['Float'];
  dislikedBy?: Maybe<Array<UserType>>;
  isEvent: Scalars['Boolean'];
  likeCount: Scalars['Float'];
  likedBy?: Maybe<Array<UserType>>;
  linkedEvents: Array<EventType>;
  postedBy: UserType;
  replies?: Maybe<Array<ReplyType>>;
  reportCount: Scalars['Float'];
  reportedBy?: Maybe<Array<UserType>>;
  shareCount: Scalars['Float'];
  sharedBy?: Maybe<Array<UserType>>;
  time: Scalars['String'];
  title: Scalars['String'];
  topics?: Maybe<Array<TopicType>>;
  userReaction: Scalars['Float'];
};

export type PaginatedResponseOfEventType = {
  __typename?: 'PaginatedResponseOfEventType';
  count: Scalars['Int'];
  data: Array<EventType>;
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfNoticeType = {
  __typename?: 'PaginatedResponseOfNoticeType';
  count: Scalars['Int'];
  data: Array<NoticeType>;
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfReplyType = {
  __typename?: 'PaginatedResponseOfReplyType';
  count: Scalars['Int'];
  data: Array<ReplyType>;
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfTestType = {
  __typename?: 'PaginatedResponseOfTestType';
  count: Scalars['Int'];
  data: Array<TestType>;
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfTopicType = {
  __typename?: 'PaginatedResponseOfTopicType';
  count: Scalars['Int'];
  data: Array<TopicType>;
  hasNext: Scalars['Boolean'];
};

export type PaginatedResponseOfUserType = {
  __typename?: 'PaginatedResponseOfUserType';
  count: Scalars['Int'];
  data: Array<UserType>;
  hasNext: Scalars['Boolean'];
};

export type PreferencesType = {
  __typename?: 'PreferencesType';
  darkmode?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<Scalars['Boolean']>;
  roundup?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  GoogleAuthUrl: Scalars['String'];
  GoogleLogin: UserType;
  GoogleLoginApp: UserType;
  getAllEvents: PaginatedResponseOfEventType;
  getAllNotices: PaginatedResponseOfNoticeType;
  getAllReplies: PaginatedResponseOfReplyType;
  getAllTests: PaginatedResponseOfTestType;
  getAllTopics: PaginatedResponseOfTopicType;
  getAllUsers: PaginatedResponseOfUserType;
  getFeed: PaginatedResponseOfNoticeType;
  getFileURL: Array<Scalars['String']>;
  getNotSubscribedTopics: Array<TopicType>;
  getNoticesByTopic: Array<Maybe<NoticeType>>;
  getSingleEvent: EventType;
  getSingleNotice: NoticeType;
  getSingleReply: ReplyType;
  getSingleTest: TestType;
  getSingleTopic: TopicType;
  getSingleUser: UserType;
  getSubscribedTopics: Array<TopicType>;
  getUser?: Maybe<UserType>;
  textSearch: SearchResultType;
};


export type QueryGoogleLoginArgs = {
  input: SocialAuthInput;
};


export type QueryGoogleLoginAppArgs = {
  idToken: Scalars['String'];
};


export type QueryGetAllEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllNoticesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllRepliesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTestsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFeedArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};


export type QueryGetFileUrlArgs = {
  filenames: Array<Scalars['String']>;
};


export type QueryGetNoticesByTopicArgs = {
  topicId: Scalars['String'];
};


export type QueryGetSingleEventArgs = {
  id: Scalars['String'];
};


export type QueryGetSingleNoticeArgs = {
  id: Scalars['String'];
};


export type QueryGetSingleReplyArgs = {
  id: Scalars['String'];
};


export type QueryGetSingleTestArgs = {
  id: Scalars['String'];
};


export type QueryGetSingleTopicArgs = {
  id: Scalars['String'];
};


export type QueryGetSingleUserArgs = {
  id: Scalars['String'];
};


export type QueryTextSearchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type ReplyType = {
  __typename?: 'ReplyType';
  _id: Scalars['ID'];
  commentedBy: UserType;
  repliedTo: UserType;
  replies?: Maybe<Array<ReplyType>>;
  time: Scalars['DateTime'];
};

export type SearchResultType = {
  __typename?: 'SearchResultType';
  events: Array<EventType>;
  notices: Array<NoticeType>;
  topics: Array<TopicType>;
  users: Array<UserType>;
};

export type SocialAuthInput = {
  code: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  keepMeSignedIn?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TestType = {
  __typename?: 'TestType';
  _id: Scalars['ID'];
  name: Scalars['String'];
  topics?: Maybe<Array<TopicType>>;
};

export type TopicType = {
  __typename?: 'TopicType';
  _id: Scalars['ID'];
  about: Scalars['String'];
  color: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  subscribedToTopic: Scalars['Boolean'];
  subscriberCount: Scalars['Int'];
};

export type UserRegisterType = {
  batch: Scalars['Int'];
  bio: Scalars['String'];
  discord: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  preferences: EditProfilePreferencesType;
  profilePicture: Scalars['String'];
  subscriptions?: InputMaybe<Array<Scalars['String']>>;
};

export type UserType = {
  __typename?: 'UserType';
  _id: Scalars['ID'];
  banned?: Maybe<Scalars['Boolean']>;
  batch?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  discord: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  posted?: Maybe<Array<NoticeType>>;
  preferences: PreferencesType;
  profilePicture?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  subscribedEvents?: Maybe<Array<EventType>>;
  subscriptions?: Maybe<Array<TopicType>>;
};

export type MinPostFragment = { __typename?: 'NoticeType', _id: string, time: string, title: string, body: string, topics?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null };

export type MinUserFragment = { __typename?: 'UserType', _id: string, name: string, batch?: number | null, email: string, profilePicture?: string | null, bio?: string | null };

export type UserPreferencesFragment = { __typename?: 'UserType', preferences: { __typename: 'PreferencesType', darkmode?: boolean | null, notifications?: boolean | null, roundup?: boolean | null } };

export type UserSubscriptionsFragment = { __typename?: 'UserType', subscriptions?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null, subscribedEvents?: Array<{ __typename?: 'EventType', _id: string, name: string, date: string, venue: string, meetLink: string }> | null };

export type CreateNoticeMutationVariables = Exact<{
  notice: CreateNoticeInputType;
  events: Array<CreateEventInputType> | CreateEventInputType;
}>;


export type CreateNoticeMutation = { __typename?: 'Mutation', createNotice: boolean };

export type FinishRegistrationMutationVariables = Exact<{
  userData: UserRegisterType;
}>;


export type FinishRegistrationMutation = { __typename?: 'Mutation', finishRegistration: boolean };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: boolean };

export type SubscribeToEventMutationVariables = Exact<{
  event: Scalars['String'];
}>;


export type SubscribeToEventMutation = { __typename?: 'Mutation', subscribeEvent: boolean };

export type SubscribeToTopicMutationVariables = Exact<{
  topic: Scalars['String'];
}>;


export type SubscribeToTopicMutation = { __typename?: 'Mutation', subscribeTopic: boolean };

export type UnsubscribeFromEventMutationVariables = Exact<{
  event: Scalars['String'];
}>;


export type UnsubscribeFromEventMutation = { __typename?: 'Mutation', unsubscribeEvent: boolean };

export type UnsubscribeFromTopicMutationVariables = Exact<{
  topic: Scalars['String'];
}>;


export type UnsubscribeFromTopicMutation = { __typename?: 'Mutation', unsubscribeTopic: boolean };

export type UpdateUserMutationVariables = Exact<{
  input: EditProfileInputType;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: boolean };

export type CreateFileUploadUrlQueryVariables = Exact<{
  filenames: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateFileUploadUrlQuery = { __typename?: 'Query', url: Array<string> };

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', getAllEvents: { __typename?: 'PaginatedResponseOfEventType', data: Array<{ __typename?: 'EventType', _id: string, name: string, description?: string | null, date: string, venue: string, meetLink: string }> } };

export type GetTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopicsQuery = { __typename?: 'Query', getAllTopics: { __typename?: 'PaginatedResponseOfTopicType', data: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string, image: string, about: string }> } };

export type GetFeedQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
}>;


export type GetFeedQuery = { __typename?: 'Query', getFeed: { __typename?: 'PaginatedResponseOfNoticeType', count: number, hasNext: boolean, data: Array<{ __typename?: 'NoticeType', _id: string, title: string, body: string, time: string, attachedImages?: Array<string> | null, isEvent: boolean, likeCount: number, postedBy: { __typename?: 'UserType', _id: string, name: string, profilePicture?: string | null }, topics?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null, linkedEvents: Array<{ __typename?: 'EventType', _id: string, name: string, venue: string, date: string, meetLink: string }> }> } };

export type GetTopicInformationQueryVariables = Exact<{
  topic: Scalars['String'];
}>;


export type GetTopicInformationQuery = { __typename?: 'Query', getSingleTopic: { __typename?: 'TopicType', _id: string, name: string, about: string, image: string, color: string, subscribedToTopic: boolean, subscriberCount: number }, getNoticesByTopic: Array<{ __typename?: 'NoticeType', _id: string, time: string, title: string, body: string, linkedEvents: Array<{ __typename?: 'EventType', _id: string }>, topics?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null } | null> };

export type GoogleAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleAuthUrlQuery = { __typename?: 'Query', url: string };

export type GoogleLoginQueryVariables = Exact<{
  input: SocialAuthInput;
}>;


export type GoogleLoginQuery = { __typename?: 'Query', user: { __typename?: 'UserType', _id: string, name: string, batch?: number | null, email: string, profilePicture?: string | null, bio?: string | null } };

export type LoggedInUserQueryVariables = Exact<{ [key: string]: never; }>;


export type LoggedInUserQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', _id: string, name: string, batch?: number | null, email: string, profilePicture?: string | null, bio?: string | null } | null };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', user?: { __typename?: 'UserType', discord: string, phone: string, _id: string, name: string, batch?: number | null, email: string, profilePicture?: string | null, bio?: string | null, posted?: Array<{ __typename?: 'NoticeType', _id: string, time: string, title: string, body: string, topics?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null }> | null, preferences: { __typename: 'PreferencesType', darkmode?: boolean | null, notifications?: boolean | null, roundup?: boolean | null }, subscriptions?: Array<{ __typename?: 'TopicType', _id: string, name: string, color: string }> | null, subscribedEvents?: Array<{ __typename?: 'EventType', _id: string, name: string, date: string, venue: string, meetLink: string }> | null } | null };

export const MinPostFragmentDoc = gql`
    fragment MinPost on NoticeType {
  _id
  topics {
    _id
    name
    color
  }
  time
  title
  body
}
    `;
export const MinUserFragmentDoc = gql`
    fragment MinUser on UserType {
  _id
  name
  batch
  email
  profilePicture
  bio
}
    `;
export const UserPreferencesFragmentDoc = gql`
    fragment UserPreferences on UserType {
  preferences {
    darkmode
    notifications
    roundup
    __typename
  }
}
    `;
export const UserSubscriptionsFragmentDoc = gql`
    fragment UserSubscriptions on UserType {
  subscriptions {
    _id
    name
    color
  }
  subscribedEvents {
    _id
    name
    date
    venue
    meetLink
  }
}
    `;
export const CreateNoticeDocument = gql`
    mutation CreateNotice($notice: CreateNoticeInputType!, $events: [CreateEventInputType!]!) {
  createNotice(notice: $notice, events: $events)
}
    `;
export type CreateNoticeMutationFn = Apollo.MutationFunction<CreateNoticeMutation, CreateNoticeMutationVariables>;

/**
 * __useCreateNoticeMutation__
 *
 * To run a mutation, you first call `useCreateNoticeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoticeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoticeMutation, { data, loading, error }] = useCreateNoticeMutation({
 *   variables: {
 *      notice: // value for 'notice'
 *      events: // value for 'events'
 *   },
 * });
 */
export function useCreateNoticeMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoticeMutation, CreateNoticeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoticeMutation, CreateNoticeMutationVariables>(CreateNoticeDocument, options);
      }
export type CreateNoticeMutationHookResult = ReturnType<typeof useCreateNoticeMutation>;
export type CreateNoticeMutationResult = Apollo.MutationResult<CreateNoticeMutation>;
export type CreateNoticeMutationOptions = Apollo.BaseMutationOptions<CreateNoticeMutation, CreateNoticeMutationVariables>;
export const FinishRegistrationDocument = gql`
    mutation FinishRegistration($userData: UserRegisterType!) {
  finishRegistration(userData: $userData)
}
    `;
export type FinishRegistrationMutationFn = Apollo.MutationFunction<FinishRegistrationMutation, FinishRegistrationMutationVariables>;

/**
 * __useFinishRegistrationMutation__
 *
 * To run a mutation, you first call `useFinishRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishRegistrationMutation, { data, loading, error }] = useFinishRegistrationMutation({
 *   variables: {
 *      userData: // value for 'userData'
 *   },
 * });
 */
export function useFinishRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<FinishRegistrationMutation, FinishRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishRegistrationMutation, FinishRegistrationMutationVariables>(FinishRegistrationDocument, options);
      }
export type FinishRegistrationMutationHookResult = ReturnType<typeof useFinishRegistrationMutation>;
export type FinishRegistrationMutationResult = Apollo.MutationResult<FinishRegistrationMutation>;
export type FinishRegistrationMutationOptions = Apollo.BaseMutationOptions<FinishRegistrationMutation, FinishRegistrationMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const SubscribeToEventDocument = gql`
    mutation SubscribeToEvent($event: String!) {
  subscribeEvent(eventId: $event)
}
    `;
export type SubscribeToEventMutationFn = Apollo.MutationFunction<SubscribeToEventMutation, SubscribeToEventMutationVariables>;

/**
 * __useSubscribeToEventMutation__
 *
 * To run a mutation, you first call `useSubscribeToEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToEventMutation, { data, loading, error }] = useSubscribeToEventMutation({
 *   variables: {
 *      event: // value for 'event'
 *   },
 * });
 */
export function useSubscribeToEventMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeToEventMutation, SubscribeToEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscribeToEventMutation, SubscribeToEventMutationVariables>(SubscribeToEventDocument, options);
      }
export type SubscribeToEventMutationHookResult = ReturnType<typeof useSubscribeToEventMutation>;
export type SubscribeToEventMutationResult = Apollo.MutationResult<SubscribeToEventMutation>;
export type SubscribeToEventMutationOptions = Apollo.BaseMutationOptions<SubscribeToEventMutation, SubscribeToEventMutationVariables>;
export const SubscribeToTopicDocument = gql`
    mutation SubscribeToTopic($topic: String!) {
  subscribeTopic(topicID: $topic)
}
    `;
export type SubscribeToTopicMutationFn = Apollo.MutationFunction<SubscribeToTopicMutation, SubscribeToTopicMutationVariables>;

/**
 * __useSubscribeToTopicMutation__
 *
 * To run a mutation, you first call `useSubscribeToTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToTopicMutation, { data, loading, error }] = useSubscribeToTopicMutation({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useSubscribeToTopicMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeToTopicMutation, SubscribeToTopicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscribeToTopicMutation, SubscribeToTopicMutationVariables>(SubscribeToTopicDocument, options);
      }
export type SubscribeToTopicMutationHookResult = ReturnType<typeof useSubscribeToTopicMutation>;
export type SubscribeToTopicMutationResult = Apollo.MutationResult<SubscribeToTopicMutation>;
export type SubscribeToTopicMutationOptions = Apollo.BaseMutationOptions<SubscribeToTopicMutation, SubscribeToTopicMutationVariables>;
export const UnsubscribeFromEventDocument = gql`
    mutation UnsubscribeFromEvent($event: String!) {
  unsubscribeEvent(eventId: $event)
}
    `;
export type UnsubscribeFromEventMutationFn = Apollo.MutationFunction<UnsubscribeFromEventMutation, UnsubscribeFromEventMutationVariables>;

/**
 * __useUnsubscribeFromEventMutation__
 *
 * To run a mutation, you first call `useUnsubscribeFromEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeFromEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeFromEventMutation, { data, loading, error }] = useUnsubscribeFromEventMutation({
 *   variables: {
 *      event: // value for 'event'
 *   },
 * });
 */
export function useUnsubscribeFromEventMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeFromEventMutation, UnsubscribeFromEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnsubscribeFromEventMutation, UnsubscribeFromEventMutationVariables>(UnsubscribeFromEventDocument, options);
      }
export type UnsubscribeFromEventMutationHookResult = ReturnType<typeof useUnsubscribeFromEventMutation>;
export type UnsubscribeFromEventMutationResult = Apollo.MutationResult<UnsubscribeFromEventMutation>;
export type UnsubscribeFromEventMutationOptions = Apollo.BaseMutationOptions<UnsubscribeFromEventMutation, UnsubscribeFromEventMutationVariables>;
export const UnsubscribeFromTopicDocument = gql`
    mutation UnsubscribeFromTopic($topic: String!) {
  unsubscribeTopic(topicID: $topic)
}
    `;
export type UnsubscribeFromTopicMutationFn = Apollo.MutationFunction<UnsubscribeFromTopicMutation, UnsubscribeFromTopicMutationVariables>;

/**
 * __useUnsubscribeFromTopicMutation__
 *
 * To run a mutation, you first call `useUnsubscribeFromTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeFromTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeFromTopicMutation, { data, loading, error }] = useUnsubscribeFromTopicMutation({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useUnsubscribeFromTopicMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeFromTopicMutation, UnsubscribeFromTopicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnsubscribeFromTopicMutation, UnsubscribeFromTopicMutationVariables>(UnsubscribeFromTopicDocument, options);
      }
export type UnsubscribeFromTopicMutationHookResult = ReturnType<typeof useUnsubscribeFromTopicMutation>;
export type UnsubscribeFromTopicMutationResult = Apollo.MutationResult<UnsubscribeFromTopicMutation>;
export type UnsubscribeFromTopicMutationOptions = Apollo.BaseMutationOptions<UnsubscribeFromTopicMutation, UnsubscribeFromTopicMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: EditProfileInputType!) {
  updateUser(input: $input)
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateFileUploadUrlDocument = gql`
    query CreateFileUploadURL($filenames: [String!]!) {
  url: getFileURL(filenames: $filenames)
}
    `;

/**
 * __useCreateFileUploadUrlQuery__
 *
 * To run a query within a React component, call `useCreateFileUploadUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateFileUploadUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateFileUploadUrlQuery({
 *   variables: {
 *      filenames: // value for 'filenames'
 *   },
 * });
 */
export function useCreateFileUploadUrlQuery(baseOptions: Apollo.QueryHookOptions<CreateFileUploadUrlQuery, CreateFileUploadUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreateFileUploadUrlQuery, CreateFileUploadUrlQueryVariables>(CreateFileUploadUrlDocument, options);
      }
export function useCreateFileUploadUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreateFileUploadUrlQuery, CreateFileUploadUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreateFileUploadUrlQuery, CreateFileUploadUrlQueryVariables>(CreateFileUploadUrlDocument, options);
        }
export type CreateFileUploadUrlQueryHookResult = ReturnType<typeof useCreateFileUploadUrlQuery>;
export type CreateFileUploadUrlLazyQueryHookResult = ReturnType<typeof useCreateFileUploadUrlLazyQuery>;
export type CreateFileUploadUrlQueryResult = Apollo.QueryResult<CreateFileUploadUrlQuery, CreateFileUploadUrlQueryVariables>;
export const GetEventsDocument = gql`
    query GetEvents {
  getAllEvents(limit: 0, skip: 0) {
    data {
      _id
      name
      description
      date
      venue
      meetLink
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetTopicsDocument = gql`
    query GetTopics {
  getAllTopics(limit: 0, skip: 0) {
    data {
      _id
      name
      color
      image
      about
    }
  }
}
    `;

/**
 * __useGetTopicsQuery__
 *
 * To run a query within a React component, call `useGetTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopicsQuery(baseOptions?: Apollo.QueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
      }
export function useGetTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopicsQuery, GetTopicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopicsQuery, GetTopicsQueryVariables>(GetTopicsDocument, options);
        }
export type GetTopicsQueryHookResult = ReturnType<typeof useGetTopicsQuery>;
export type GetTopicsLazyQueryHookResult = ReturnType<typeof useGetTopicsLazyQuery>;
export type GetTopicsQueryResult = Apollo.QueryResult<GetTopicsQuery, GetTopicsQueryVariables>;
export const GetFeedDocument = gql`
    query GetFeed($limit: Float, $skip: Float) {
  getFeed(limit: $limit, skip: $skip) {
    data {
      _id
      title
      body
      time
      postedBy {
        _id
        name
        profilePicture
      }
      attachedImages
      topics {
        _id
        name
        color
      }
      isEvent
      linkedEvents {
        _id
        name
        venue
        date
        meetLink
      }
      likeCount
    }
    count
    hasNext
  }
}
    `;

/**
 * __useGetFeedQuery__
 *
 * To run a query within a React component, call `useGetFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
      }
export function useGetFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
        }
export type GetFeedQueryHookResult = ReturnType<typeof useGetFeedQuery>;
export type GetFeedLazyQueryHookResult = ReturnType<typeof useGetFeedLazyQuery>;
export type GetFeedQueryResult = Apollo.QueryResult<GetFeedQuery, GetFeedQueryVariables>;
export const GetTopicInformationDocument = gql`
    query GetTopicInformation($topic: String!) {
  getSingleTopic(id: $topic) {
    _id
    name
    about
    image
    color
    about
    subscribedToTopic
    subscriberCount
  }
  getNoticesByTopic(topicId: $topic) {
    ...MinPost
    linkedEvents {
      _id
    }
  }
}
    ${MinPostFragmentDoc}`;

/**
 * __useGetTopicInformationQuery__
 *
 * To run a query within a React component, call `useGetTopicInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicInformationQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetTopicInformationQuery(baseOptions: Apollo.QueryHookOptions<GetTopicInformationQuery, GetTopicInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopicInformationQuery, GetTopicInformationQueryVariables>(GetTopicInformationDocument, options);
      }
export function useGetTopicInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopicInformationQuery, GetTopicInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopicInformationQuery, GetTopicInformationQueryVariables>(GetTopicInformationDocument, options);
        }
export type GetTopicInformationQueryHookResult = ReturnType<typeof useGetTopicInformationQuery>;
export type GetTopicInformationLazyQueryHookResult = ReturnType<typeof useGetTopicInformationLazyQuery>;
export type GetTopicInformationQueryResult = Apollo.QueryResult<GetTopicInformationQuery, GetTopicInformationQueryVariables>;
export const GoogleAuthUrlDocument = gql`
    query GoogleAuthURL {
  url: GoogleAuthUrl
}
    `;

/**
 * __useGoogleAuthUrlQuery__
 *
 * To run a query within a React component, call `useGoogleAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, options);
      }
export function useGoogleAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, options);
        }
export type GoogleAuthUrlQueryHookResult = ReturnType<typeof useGoogleAuthUrlQuery>;
export type GoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGoogleAuthUrlLazyQuery>;
export type GoogleAuthUrlQueryResult = Apollo.QueryResult<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>;
export const GoogleLoginDocument = gql`
    query GoogleLogin($input: SocialAuthInput!) {
  user: GoogleLogin(input: $input) {
    ...MinUser
  }
}
    ${MinUserFragmentDoc}`;

/**
 * __useGoogleLoginQuery__
 *
 * To run a query within a React component, call `useGoogleLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleLoginQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleLoginQuery(baseOptions: Apollo.QueryHookOptions<GoogleLoginQuery, GoogleLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleLoginQuery, GoogleLoginQueryVariables>(GoogleLoginDocument, options);
      }
export function useGoogleLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleLoginQuery, GoogleLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleLoginQuery, GoogleLoginQueryVariables>(GoogleLoginDocument, options);
        }
export type GoogleLoginQueryHookResult = ReturnType<typeof useGoogleLoginQuery>;
export type GoogleLoginLazyQueryHookResult = ReturnType<typeof useGoogleLoginLazyQuery>;
export type GoogleLoginQueryResult = Apollo.QueryResult<GoogleLoginQuery, GoogleLoginQueryVariables>;
export const LoggedInUserDocument = gql`
    query LoggedInUser {
  user: getUser {
    ...MinUser
  }
}
    ${MinUserFragmentDoc}`;

/**
 * __useLoggedInUserQuery__
 *
 * To run a query within a React component, call `useLoggedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoggedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggedInUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoggedInUserQuery(baseOptions?: Apollo.QueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
      }
export function useLoggedInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoggedInUserQuery, LoggedInUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoggedInUserQuery, LoggedInUserQueryVariables>(LoggedInUserDocument, options);
        }
export type LoggedInUserQueryHookResult = ReturnType<typeof useLoggedInUserQuery>;
export type LoggedInUserLazyQueryHookResult = ReturnType<typeof useLoggedInUserLazyQuery>;
export type LoggedInUserQueryResult = Apollo.QueryResult<LoggedInUserQuery, LoggedInUserQueryVariables>;
export const UserProfileDocument = gql`
    query UserProfile {
  user: getUser {
    ...MinUser
    ...UserPreferences
    ...UserSubscriptions
    posted {
      ...MinPost
    }
    discord
    phone
  }
}
    ${MinUserFragmentDoc}
${UserPreferencesFragmentDoc}
${UserSubscriptionsFragmentDoc}
${MinPostFragmentDoc}`;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;