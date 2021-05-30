import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Link = styled(NavLink)`
    color: #bdbdbd;
    padding: 4px;
    font-size: 15px;
    text-decoration: none;

    &:hover{
        color: #fff
    }
`

export const Logo = styled(NavLink)`
    color: #fff;
    padding: 4px;
    text-decoration: none;
`
