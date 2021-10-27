import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import AppLayout from '../../modules/layouts/AppLayout';
import Avatar from '../../ui/Avatar';
import Button from '../../ui/Button';
import Container from '../../ui/Container';
import RadioButton from '../../ui/RadioButton';
import Switch from '../../ui/Switch';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
	const router = useRouter();
	const [selected, setSelected] = React.useState('Events');
	const [active, setActive] = React.useState(false);

	return (
		<AppLayout>
			<Container maxWidth="lg" className="p-4">
				<h2 className="mb-4">Settings</h2>

				<div className="bg-gray-800 rounded flex items-center justify-between px-2 py-3 flex-col md:flex-row md:py-4 md:px-8 gap-y-5 md:gap-y-0 mb-10">
					<div className="flex gap-3 md:gap-5 items-center justify-between">
						<Avatar />
						<div>
							<h4 className="font-semibold text-md md:text-md">
								Name of the Student
							</h4>
							<p className="text-xs md:text-sm opacity-80">
								f20190000@hyderabad.bits-pilani.ac.in
							</p>
						</div>
					</div>
					<Button
						onClick={() => {
							router.replace('/');
						}}
						className="w-full md:w-[auto]"
					>
						Logout
					</Button>
				</div>

				<div className="bg-gray-800 rounded flex gap-3 p-4 flex-col mb-10">
					<div className="mb-3">
						<Switch
							id="notifs"
							active={active}
							onChange={() => setActive(!active)}
							variantChecked="cyan"
							size="sm"
							right={
								<p className="text-white font-bold text-lg">Notifications</p>
							}
						/>
					</div>

					<RadioGroup
						value={selected}
						onChange={setSelected}
						disabled={!active}
					>
						<RadioButton value={'Events'} right={'Events'} />

						<RadioButton value={'Tags'} right={'Tags that I follow'} />
					</RadioGroup>
				</div>

				<div className="bg-gray-800 rounded p-4 mb-10">
					<Switch
						id="emails"
						active={true}
						onChange={() => {}}
						variantChecked="cyan"
						right={
							<p className="text-white font-bold text-lg">
								Daily round up e-mails
							</p>
						}
					/>
				</div>

				<div className="bg-gray-800 rounded p-4">
					<p className="font-bold text-lg mb-5">Privacy Options</p>

					<div className="flex gap-3 flex-col">
						<Switch
							id="privacy_1"
							active={true}
							onChange={() => {}}
							variantChecked="cyan"
							right={<p className="text-white">WhatsApp</p>}
							size="sm"
						/>

						<Switch
							id="privacy_2"
							active={true}
							onChange={() => {}}
							variantChecked="cyan"
							right={<p className="text-white">Discord</p>}
							size="sm"
						/>
						<Switch
							id="privacy_3"
							active={true}
							onChange={() => {}}
							variantChecked="cyan"
							right={<p className="text-white">Email</p>}
							size="sm"
						/>
					</div>
				</div>
			</Container>
		</AppLayout>
	);
};

export default Settings;
