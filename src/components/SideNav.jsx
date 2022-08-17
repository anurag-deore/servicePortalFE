import React from 'react';
import styled from "styled-components";
import { Bonfire, Newspaper, Repeat } from "@styled-icons/ionicons-outline";
import { Grid1x2 } from "@styled-icons/bootstrap";
import { PeopleCommunity } from "@styled-icons/fluentui-system-regular";

const SideNavContainer = styled.div`
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-right: 1px solid #F0EEF0;
`;

const SideNavLogo = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuItemIcon = styled.div`
    padding: 12px;
    border-radius: 12px;
    color: #282D86;
    position: relative;
    border:1px solid transparent;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 12px 0px;
    padding: 0px 10px;
    width: fit-content;
    transition: all 0.2s ease-in-out;
    position: relative;
    &.activeIcon>${MenuItemIcon}{
        color: #f7941e;
    }
    &.activeIcon::after{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        content: "";
        height: 40px;
        border-right: 3px solid #f7941e;
    }
    &:hover>${MenuItemIcon}{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px 0px;
        background-color: #fdf5eb;
        color: #f7941e;
    }
    &:hover::before{
        position: absolute;
        left: 90%;
        content: attr(title);
        top: 10%;
        background-color:#fdf5eb;
        color: #f7941e;
        border-radius: 12px;
        border:1px solid #f7941e;
        z-index: 2;
        width: max-content;
        font-size: 15px;
        padding: 10px;
    }
`;

const MenuList = [
    { "route": "/", "name": "My Space", "icon": <Grid1x2 size={28} /> },
    { "route": "/mediaUpdate", "name": "Media & Updates", "icon": <Newspaper size={28} /> },
    { "route": "/talent", "name": "Talent & Skills", "icon": <Bonfire size={28} /> },
    { "route": "/hr", "name": "Human Resources", "icon": <PeopleCommunity size={28} /> },
    { "route": "/requestapprovals", "name": "Requests & Approvals", "icon": <Repeat size={28} /> },
];
const SideNav = () => {
    return (
        <SideNavContainer>
            <div>
                <SideNavLogo>
                    <img src="./ltilogo.png" alt="Logo" style={{ width: "40px" }} />
                </SideNavLogo>
                <hr />
                {MenuList.map((item, idx) => (
                    <MenuItem key={idx + item.name} className={item.route === "/" ? `activeIcon` : ``} title={item.name}>
                        <MenuItemIcon>
                            {item.icon}
                        </MenuItemIcon>
                    </MenuItem>
                ))}

            </div>
        </SideNavContainer>
    )
}

export default SideNav;