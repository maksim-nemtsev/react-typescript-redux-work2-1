// import React from "react";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Divider from "@material-ui/core/Divider";
// import {
//   IconButton,
//   InputBase,
//   Paper,
//   Button,
//   Container,
// } from "@material-ui/core";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";
// import MainPageRisksSlider from "./MainPageRisksSlider";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//     menu: {
//       marginLeft: theme.spacing(1),
//       marginTop: theme.spacing(10),
//       maxHeight: "587px",
//     },
//     input: {
//       padding: "0px 10px",
//     },
//     menuItem: {
//       flexDirection: "column",
//     },
//     containerForButtons: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       paddingTop: theme.spacing(1),
//       margin: "10px 0",
//     },
//     risksInput: {
//       width: "70px",
//       borderRadius: "10px",
//       margin: theme.spacing(1),
//     },
//     containerRisksInputs: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//   })
// );

// export default function MainPageRisks() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [lowRisks, setLowRisks] = React.useState<number | HTMLElement>(0);
//   const [highRisks, setHighRisks] = React.useState<number | HTMLElement>(0);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Риски {`${lowRisks}-${highRisks}`}
//       </Button>

//       <Menu
//         className={classes.menu}
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <Container className={classes.containerRisksInputs}>
//           <Input
//             className={classes.risksInput}
//             disabled
//             defaultValue={lowRisks}
//           />
//           <Input
//             className={classes.risksInput}
//             disabled
//             defaultValue={highRisks}
//           />
//         </Container>
//         <Divider />
//         <MainPageRisksSlider />
//         <Divider />
//         <Container className={classes.containerForButtons}>
//           <Button>Сбросить</Button>
//           <Button color="primary">Применить</Button>
//         </Container>
//       </Menu>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const Risks = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className="nav__toggle"
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        RISKS
      </DropdownToggle>
      <DropdownMenu>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
        <div onClick={toggle}>Custom dropdown item</div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Risks;
