import { Fragment } from "react";
import mainheaderImage from "../../assests/headerBanner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderLogoutButton from "./HeaderLogoutButton";
import { useParams } from 'react-router-dom';

const Header = (props) => {
  const { id } = useParams();
  const content = id === '552486486' ? 'Admin' : `${id}`;
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>KIDMAIOAK</h1>
        <div> Table No. {content} </div>
        <HeaderCartButton onClick={props.onShowCart} />
        <HeaderLogoutButton></HeaderLogoutButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
