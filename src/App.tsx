import React from 'react';
import './App.css';
import TopAppBar from './components/AppBar';
import CollapsibleTable from './components/PolicyTable';
import PolicyDataGrid from './components/PolicyDataGrid';
import { cols, getPolicyGroupData } from './services/policy_data';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList'; 
import TabPanel from '@mui/lab/TabPanel';
import PolicyGroupTable from './components/PolicyGroupTable';
import TreeDataSimple from './components/TreeData';
import map from "lodash/map";
import assign from "lodash/assign";

function App() {
  
const [rows, setRows] = React.useState<any >([]);
const [isLoading, setLoading] = React.useState(true);

React.useEffect(() => {
  getPolicyGroupData().then((data)=>{

    const groupedData=map(data.data , function(policy) { 
      return assign({}, policy, {reverseGrp: [policy.severity,policy.cis_level,policy.policy_group,policy.cis_id,policy._id]});
 });

    console.log(groupedData)
    setRows(groupedData)
    setLoading(false)
  })
}, []);



const [value, setValue] = React.useState('1');

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};
const groupRows=(rowsData:any)=>{
  const groupData = rowsData.reduce(function (r:any, a:any) {
    r[a.policy_group] = r[a.policy_group] || [];
    r[a.policy_group].push(a);
    return r;
  }, Object.create(null));
  console.log(groupData);

  return groupData;
}


  return (
    <div className="App">
     
       <TopAppBar></TopAppBar>
       
       { 
    isLoading ?
    (
    <h1>Loading</h1>
    ):(
      <div>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="DataGrid" value="1" />
                    <Tab label="React Table" value="2" />
                    <Tab label="Grouping" value="3" />
                    <Tab label="Tree" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1"><PolicyDataGrid rows={rows} cols={cols} />
                </TabPanel>
                <TabPanel value="2"> <CollapsibleTable rows={rows} cols={cols} /></TabPanel>
                <TabPanel value="3">
                  <PolicyGroupTable rows={groupRows(rows)} cols={cols}></PolicyGroupTable>
              



                </TabPanel>
                <TabPanel value="4">
                <TreeDataSimple  rows={rows} cols={cols}/>
                </TabPanel>
              </TabContext>
     
      </div>
      )
    }
   
    </div>
  );
}

export default App;
