import React from 'react';
import './FindUs.css';
import GettingHere from './GettingHere/GettingHere';
import PlacesToGo from './PlacesToGo/PlacesToGo';
import OpeningTimes from './OpeningTimes/OpeningTimes';

import { ProSidebarProvider, Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import {  Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";

const FindUs = () => {
    return (
        <div>
            <ProSidebarProvider>
                <div style={{ display: "flex" }}>
                    <Sidebar className="find-us-sidebar" width="15%" rootStyles={{
                        [`.${sidebarClasses.container}`]: {
                        backgroundColor: '#636363'
                        },
                    }}>
                        <Menu menuItemStyles={{
                            button: ({ active }) => {
                                return {
                                color: "white-smoke",
                                backgroundColor: active ? "#e67700" : undefined,
                                "&:hover": {
                                    backgroundColor: "#9D5101 !important",
                                    color: "white !important",
                                    borderRadius: "8px !important",
                                    fontWeight: "bold !important"
                                },
                                };
                            },
                        }}>
                            <MenuItem component={<Link to="/findus" className="link" />} style={{marginTop: '40%'}}> Getting Here </MenuItem>
                            <MenuItem component={<Link to="places-to-go" className="link" />} style={{marginTop: '10%'}}> Places To Go </MenuItem>
                            <MenuItem component={<Link to="opening-times" className="link" />} style={{marginTop: '10%'}}> Opening Times </MenuItem>
                            <MenuItem component={<Link to="screens" className="link" />} style={{marginTop: '10%'}}> Screens </MenuItem>
                        </Menu>
                    </Sidebar>
                    <Routes>
                        <Route path="/" element={<GettingHere />} />
                        <Route path="/places-to-go" element={<PlacesToGo />} />
                        <Route path="/opening-times" element={<OpeningTimes />} />
                        <Route path="/screens" element={<GettingHere />} />
                        <Route path="*" element={<Navigate to="/"/>} /> 
                    </Routes>
                </div>
            </ProSidebarProvider>
        </div>
    );
}
 
export default FindUs;