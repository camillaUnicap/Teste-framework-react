import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);