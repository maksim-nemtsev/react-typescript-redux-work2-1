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
// import SearchIcon from "@material-ui/icons/Search";
// import MainPageTimeFrameLabel from "./MainPageTimeFrameLabel";

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
//   })
// );

// export default function MainPageTimeFrames() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [numberOfTimeFrames, setNumberOfTimeFrames] = React.useState<
//     number | HTMLElement
//   >(0);

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
//         Тайм Фреймы {numberOfTimeFrames}
//       </Button>

//       <Menu
//         className={classes.menu}
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {["Day", "Week", "Month", "Year", "3 Yars", "5 Years", "10 Years"].map(
//           (label) => (
//             <MenuItem className={classes.menuItem}>
//               <MainPageTimeFrameLabel key={label} label={label} />
//             </MenuItem>
//           )
//         )}
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
import { AvForm, AvGroup, AvInput } from "availity-reactstrap-validation";

import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Label,
  Media,
} from "reactstrap";

const TimeFrames = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submit, setSubmit] = useState({});

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleSubmit = (val: any) => setSubmit({ val });

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className={
          dropdownOpen === false
            ? `dropdown-toggle__menu-title`
            : `dropdown-toggle__menu-title active`
        }
        tag="span"
      >
        TIME FRAMES
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu timeframes"
      >
        <AvForm className="drop-down__form" onSubmit={handleSubmit}>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Day
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Week
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Month
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Year
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              3 Year
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              5 Year
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              10 Year
            </Label>
            <AvInput
              className="drop-input"
              type="checkbox"
              name="inOrOut"
              trueValue="Yes, I'm in!"
              falseValue="NOPE!"
            />
          </AvGroup>
          <DropdownItem divider />
          <FormGroup>
            <div className="portfolio-segment__footer">
              <Button className="btn portfolio-segment__btn" color="link">
                Сбросить
              </Button>
              <Button className="btn portfolio-segment__btn" color="link">
                Применить
              </Button>
            </div>
          </FormGroup>
        </AvForm>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TimeFrames;
