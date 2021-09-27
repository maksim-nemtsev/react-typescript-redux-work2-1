// import React from "react";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import MainPageSegmentLabel from "./MainPageSegmentLabel/MainPageSegmentLabel";
// import Divider from "@material-ui/core/Divider";
// import {
//   IconButton,
//   InputBase,
//   Paper,
//   Button,
//   Container,
// } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//     menu: {
//       marginLeft: theme.spacing(1),
//       marginTop: theme.spacing(8),
//       borderRadius: theme.spacing(2),
//       maxHeight: "578px",
//     },
//     menuItem: {
//       flexDirection: "column",
//       padding: "0px 20px",
//     },
//     containerForButtons: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       paddingTop: theme.spacing(1),
//       margin: "10px 0",
//     },
//     paper: {
//       margin: theme.spacing(3),
//       backgroundColor: "#ffffff",
//     },
//     input: {
//       padding: "0px 10px",
//     },
//   })
// );

// export default function MainPageSegment() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   let [numberOfSegments, setNumberOfSegments] = React.useState<
//     Number | HTMLElement
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
//         Сегмент {numberOfSegments}
//       </Button>
//       <Menu
//         className={classes.menu}
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <Paper component="form" className={classes.paper}>
//           <InputBase
//             className={classes.input}
//             placeholder="Search Keywords"
//             inputProps={{ "aria-label": "search google maps" }}
//           />
//           <IconButton type="submit" aria-label="search">
//             <SearchIcon />
//           </IconButton>
//         </Paper>
//         {["Сегмент 1", "Сегмент 2", "Сегмент 3"].map((label, idx) => (
//           <MenuItem className={classes.menuItem}>
//             <MainPageSegmentLabel key={label + idx} label={label} />
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
import GrowthOrientedSVG from "../../../../assets/svg/growth-orientedSVG.svg";
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

const Segment = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [submit, setSubmit] = useState({});

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const handleSubmit = (val: any) => setSubmit({ val });

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
        SEGMENT
        <Badge className="badge__count">1</Badge>
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu portfolio"
      >
        <AvForm className="drop-down__form">
          <AvGroup className="form-check p-0" check>
            <div className="drop-down__image">
              <Media
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile mr-2"
                s
              />
            </div>
            <Label className="drop-name portfolio" check>
              Ростоориентированные
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
            <div className="drop-down__image">
              <Media
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile mr-2"
                s
              />
            </div>
            <Label className="drop-name portfolio" check>
              Ростоориентированные
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
            <div className="drop-down__image">
              <Media
                src={GrowthOrientedSVG}
                alt="profile"
                className="drop-profile mr-2"
                s
              />
            </div>
            <Label className="drop-name portfolio" check>
              Ростоориентированные
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

export default Segment;
