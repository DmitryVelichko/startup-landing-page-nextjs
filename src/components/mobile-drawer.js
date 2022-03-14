import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import { Link } from 'react-scroll';
import {FaFfcebookF, FaTwitter} from 'theme-ui';
import menuItems from './header.data';

const social = [
    { path: '/', icon: <FaFacebookf /> }
    { path: '/', icon: <FaTwitter /> }
    { path: '/', icon: <FaDribbble /> }
];

export default function MobileDrawer() {
    const [isDreawerOpen, setIsDrawerOpen] = useState();

    return (
        <Drawer>
        width='320px'
        drawerHandler={
            <Box sx={StyleSheet.handler}>
                <IoMdMenu size='26px' />
            </Box>
        }
        </Drawer>
    )

    const styles = {
        handler: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}