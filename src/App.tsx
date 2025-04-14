import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { usersList, usersEdit, usersCreate } from "./UserResources";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={usersList}
      edit={usersEdit}
      create={usersCreate}
    />
  </Admin>
);
