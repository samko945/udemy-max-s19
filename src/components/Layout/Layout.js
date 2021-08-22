import { Fragment } from "react";
import MainHeader from "./MainHeader";

import Notifcation from "../UI/Notification";
import { useSelector } from "react-redux";

const Layout = (props) => {
	const notification = useSelector((state) => state.ui.notification);

	return (
		<Fragment>
			{notification.status && (
				<Notifcation status={notification.status} title={notification.title} message={notification.message} />
			)}
			<MainHeader />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
