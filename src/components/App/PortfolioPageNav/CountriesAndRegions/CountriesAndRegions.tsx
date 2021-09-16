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
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import CountriesAndRegionsLabel from "./CountriesAndRegionsLabel/CountriesAndRegionsLabel";

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
//     paper: {
//       margin: theme.spacing(3),
//       backgroundColor: "#ffffff",
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

// export default function CountriesAndRegions() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [numberOfCountriesAndRegions, setNumberOfCountriesAndRegions] =
//     React.useState<number | HTMLElement>(0);

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
//         Страны и Регионы {numberOfCountriesAndRegions}
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

//         {["1", "2", "3", "4", "5"].map((label) => (
//           <MenuItem className={classes.menuItem}>
//             <CountriesAndRegionsLabel key={label} label={label} />
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
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Media,
} from "reactstrap";

const CountriesAndRegions = () => {
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
        COUNTRIES & REGIONS
      </DropdownToggle>
      <DropdownMenu
        style={{ borderRadius: "20px" }}
        className="drop-down-menu regions"
      >
        <AvForm className="drop-down__form" onSubmit={handleSubmit}>
          <Input className="drop-down__country-input" />
          <div className="drop-down__overflow">
            <AvGroup className="form-check p-0" check>
              <div className="drop-down__image">
                <Media
                  src={GrowthOrientedSVG}
                  alt="profile"
                  className="drop-profile mr-2"
                  s
                />
              </div>
              <Label className="drop-name main" check>
                Грузия
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
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
              <Label className="drop-name main" check>
                Эстония
              </Label>
              <AvInput
                className="drop-input countries"
                type="checkbox"
                name="inOrOut"
                trueValue="Yes, I'm in!"
                falseValue="NOPE!"
              />
            </AvGroup>
          </div>
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

export default CountriesAndRegions;
