import React, { useState } from 'react';
import './FindUs.css';
import GettingHere from './GettingHere';
import PlacesToGo from './PlacesToGo';
import OpeningTimes from './OpeningTimes';

import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {  Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

const FindUs = () => {
    return (
        <div>
            <ProSidebarProvider>
                <div style={{ display: "flex", height: "100vh" }} className='sidebar-container'>
                    <Sidebar className="find-us-sidebar">
                        <Menu>
                            <MenuItem className="menu1" component={<Link to="/findus" className="link" />}>
                                <h3>FIND US</h3>
                            </MenuItem>
                            <MenuItem component={<Link to="/findus" className="link" />}> Getting Here </MenuItem>
                            <MenuItem component={<Link to="places-to-go" className="link" />}> Places To Go </MenuItem>
                            <MenuItem component={<Link to="opening-times" className="link" />}> Opening Times </MenuItem>
                        </Menu>
                    </Sidebar>

                        <Routes>
                            <Route path="/" element={<GettingHere />} />
                            <Route path="/places-to-go" element={<PlacesToGo />} />
                            <Route path="/opening-times" element={<OpeningTimes />} />
                            <Route path="*" element={<Navigate to="/"/>} /> 

                        </Routes>
                </div>
            </ProSidebarProvider>
        </div>
    );
}
 
export default FindUs;