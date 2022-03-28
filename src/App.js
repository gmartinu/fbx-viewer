import * as React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FPXViewer, Select } from "./components";
import {  modelList } from './utils';
import { Box } from "@mui/system";

const Main = styled("div")({
  height: "calc(100% - 64px)",
});

function App() {
  const [state, setState] = React.useState({
    selected: ""
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setState(_v => ({
      ..._v,
      [name]: value
    }))
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dayz 3D Viewer
          </Typography>
        </Toolbar>
      </AppBar>
      <Main>
        <Box p={2} style={{ height: "100%"}}>
          <Grid container spacing={2} style={{ height: "100%", flexDirection: "row", display: "flex"}}>
            <Grid item xs={12}>
              <Select 
                label="Arma"
                name="selected"
                onChange={(e) => handleChange(e)}
                value={state.selected}
                options={modelList}
                optVal="path"
              />
            </Grid>
            <Grid item xs={12} style={{ flexGrow: "1"}}>
              {state.selected ? 
                <FPXViewer path={state.selected} />
              : null}
            </Grid>
          </Grid>
        </Box>
      </Main>
    </>
  );
}

export default App;
