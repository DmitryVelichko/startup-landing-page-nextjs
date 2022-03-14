import React, { useState } from 'react';
import { Box } from 'theme-ui';

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



}