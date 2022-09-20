import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Iraq from '../../../../assets/Images/Iraq.svg';
import UK from '../../../../assets/Images/UK.svg';
import Earth from '../../../../assets/Images/Earth.svg';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import { LocalizationStyle } from './LocalizationStyle';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))
    (({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    }));

export default function LangButton() {
    const classes = LocalizationStyle(); 

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const [t, i18n] = useTranslation();
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeLng = (lng :string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    return (
        <div>
            <Button
                className={classes.btn}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}>
                <img src={Earth} className={classes.img} alt={Earth} />
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleChangeLng("ar"); handleClose() }}>
                    <ListItemIcon>
                        <img src={Iraq} className={classes.img} alt={Iraq} />
                    </ListItemIcon>
                    عربي
                </MenuItem>
                <MenuItem onClick={() => { handleChangeLng("en"); handleClose() }}>
                    <ListItemIcon>
                        <img src={UK} className={classes.img} alt={UK} />
                    </ListItemIcon>
                    English
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
