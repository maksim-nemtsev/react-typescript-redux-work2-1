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
// import MainPageSizeLabel from "./MainPageSizeLabel";

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

// export default function MainPageSize() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [numberOfSize, setNumberOfSize] = React.useState<number | HTMLElement>(
//     0
//   );

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
//         Размеры {numberOfSize}
//       </Button>

//       <Menu
//         className={classes.menu}
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {["Small", "Middle", "Big"].map((label) => (
//           <MenuItem className={classes.menuItem}>
//             <MainPageSizeLabel key={label} label={label} />
//           </MenuItem>
//         ))}
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

const Size = () => {
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
        SIZE
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu size"
      >
        <AvForm className="drop-down__form" onSubmit={handleSubmit}>
          <AvGroup className="form-check p-0" check>
            <Label className="drop-name timeframes" check>
              Small
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
              Middle
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
              Big
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

export default Size;
