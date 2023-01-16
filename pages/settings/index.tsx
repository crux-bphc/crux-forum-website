import {
	useUpdateUserMutation,
	useUserProfileQuery,
} from '@/graphql/generated';
import withApollo from '@/lib/withApollo';
import SettingsPageLayout from '@/settings/layout/SettingsPageLayout';
import Avatar from '@/shared/ui/Avatar';
import Button from '@/shared/ui/Button';
import Card from '@/shared/ui/Card';
import Spinner from '@/shared/ui/Spinner';
import Switch from '@/shared/ui/Switch';
import type { NextPage } from 'next';
import React from 'react';

enum ActionType {
	TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS',
	TOGGLE_ROUND_UP_EMAILS = 'TOGGLE_ROUND_UP_EMAILS',
	TOGGLE_WHATSAPP = 'TOGGLE_WHATSAPP',
	TOGGLE_DISCORD = 'TOGGLE_DISCORD',
	TOGGLE_EMAIL = 'TOGGLE_EMAIL',
	UPDATE_TOTAL_STATE = 'UPDATE_TOTAL_STATE',
}

interface Action {
	type: ActionType;
	payload: Partial<SettingsState>;
}

interface SettingsState {
	notifications: boolean;
	roundupEmails: boolean;
	whatsapp: boolean;
	discord: boolean;
	email: boolean;
}

const initialState: SettingsState = {
	notifications: true,
	roundupEmails: false,
	whatsapp: true,
	discord: true,
	email: true,
};

const reducer = (state: SettingsState, action: Action): SettingsState => {
	switch (action.type) {
		case ActionType.TOGGLE_NOTIFICATIONS:
			return {
				...state,
				notifications: !state.notifications,
			};
		case ActionType.TOGGLE_ROUND_UP_EMAILS:
			return {
				...state,
				roundupEmails: !state.roundupEmails,
			};
		case ActionType.TOGGLE_WHATSAPP:
			return {
				...state,
				whatsapp: !state.whatsapp,
			};
		case ActionType.TOGGLE_DISCORD:
			return {
				...state,
				discord: !state.discord,
			};
		case ActionType.TOGGLE_EMAIL:
			return {
				...state,
				email: !state.email,
			};
		case ActionType.UPDATE_TOTAL_STATE:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

const SettingsPage: NextPage = () => {
	const { data, loading } = useUserProfileQuery({ ssr: false });
	const [state, dispatch] = React.useReducer(reducer, {
		...initialState,
	});
	const [updateUser] = useUpdateUserMutation();

	React.useEffect(() => {
		if (data?.user?.preferences) {
			dispatch({
				type: ActionType.UPDATE_TOTAL_STATE,
				payload: {
					...initialState,
					notifications: !!data.user.preferences.notifications,
					roundupEmails: !!data.user.preferences.roundup,
				},
			});
		}
	}, [data?.user?.preferences]);

	React.useEffect(() => {
		updateUser({
			variables: {
				input: {
					preferences: {
						notifications: state.notifications,
						roundup: state.roundupEmails,
						darkmode: true,
					},
				},
			},
		});
	}, [state]);

	if (loading || !data?.user) {
		return <Spinner variant="full-screen" />;
	}

	return (
		<>
			<SettingsPageLayout>
				<h1 className="mb-8 text-center text-4xl font-bold sm:mb-12 sm:text-left sm:text-5xl">
					Settings
				</h1>
				<Card className="mb-10 flex flex-col items-center justify-between px-5 py-4 md:flex-row">
					<div className="flex flex-col items-center gap-x-5 md:flex-row">
						<Avatar src={data.user.profilePicture || ''} alt={data.user.name} />
						<div className="mt-3 mb-5 text-center md:mt-0 md:mb-0 md:text-left">
							<h2 className="mb-1 text-xl font-bold sm:text-2xl">
								{data.user.name}
							</h2>
							<p className="text-sm text-gray-accent">{data.user.email}</p>
						</div>
					</div>
					<Button>Logout</Button>
				</Card>
				<Card className="mb-10 py-4 px-4">
					<div className="mb-4">
						<Switch
							checked={state.notifications}
							onChange={() => {
								dispatch({
									type: ActionType.TOGGLE_NOTIFICATIONS,
									payload: { notifications: !state.notifications },
								});
							}}
							labelPlacement="right"
							label="Notifications"
						/>
					</div>

					<Switch
						checked={state.roundupEmails}
						onChange={() => {
							dispatch({
								type: ActionType.TOGGLE_ROUND_UP_EMAILS,
								payload: { roundupEmails: !state.roundupEmails },
							});
						}}
						labelPlacement="right"
						label="Daily Round Up Emails"
					/>
				</Card>

				<Card className="py-4 px-4">
					<h3 className="mb-5 text-xl font-semibold">Privacy Options</h3>
					<div className="mb-4">
						<Switch
							checked={state.whatsapp}
							onChange={() => {
								dispatch({
									type: ActionType.TOGGLE_WHATSAPP,
									payload: { whatsapp: !state.whatsapp },
								});
							}}
							color="green"
							labelPlacement="right"
							label="WhatsApp"
						/>
					</div>

					<div className="mb-4">
						<Switch
							checked={state.discord}
							onChange={() => {
								dispatch({
									type: ActionType.TOGGLE_DISCORD,
									payload: { discord: !state.discord },
								});
							}}
							color="purple"
							labelPlacement="right"
							label="Discord"
						/>
					</div>

					<Switch
						checked={state.email}
						onChange={() => {
							dispatch({
								type: ActionType.TOGGLE_EMAIL,
								payload: { email: !state.email },
							});
						}}
						color="red"
						labelPlacement="right"
						label="Email"
					/>
				</Card>
			</SettingsPageLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(SettingsPage);
