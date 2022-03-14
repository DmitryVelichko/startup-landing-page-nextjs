import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';

const social = [
    { path: '/', icon: <FaFacebookf /> }
    { path: '/', icon: <FaTwitter /> }
    { path: '/', icon: <FaDribbble /> }
];

export default function MobileDrawer() {
    const [isDreawerOpen, setIsDrawerOpen] = useState();

    return (
        <Drawer
        width='320px'
        drawerHandler={
            <Box sx={StyleSheet.handler}>
                <IoMdMenu size='26px' />
            </Box>
        }
    )

    const styles = {
        handler: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }


}