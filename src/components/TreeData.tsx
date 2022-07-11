import * as React from 'react';
import {
  DataGridPro,
  GridColumns,
  GridRowsProp,
  DataGridProProps,
} from '@mui/x-data-grid-pro';
import { Box, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';




export  function SwitchView(props: { checked: boolean | undefined; handleChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined; }) {
    
    return (
      <FormGroup>
        <FormControlLabel control={<Switch  checked={props.checked}
      onChange={props.handleChange} />} label="Tree View" />
      </FormGroup>
    );
  }
export  function SwitchData(props: { checked: boolean | undefined; handleChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined; }) {
    
    return (
      <FormGroup>
        <FormControlLabel control={<Switch  checked={props.checked}
      onChange={props.handleChange} />} label="Reverse Tree" />
      </FormGroup>
    );
  }

export default function TreeDataSimple(props: {
    cols: GridColumns<any>; rows: readonly any[]; 
}) {
    const [checked, setChecked] = React.useState(false);
    const [rev_checked, setrevChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    const handlerevChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setrevChecked(event.target.checked);
    };
    const getDetailPanelContent = React.useCallback(
        ({ row }: GridRowParams) =>
          row._id ? <Box sx={{ p: 2,textAlign:"left" }}>
            <div><b>Rule :</b><span style={{  }}>{`${row.rule}`}</span></div>
            <div><b>Value :</b><span style={{  }}>{`${row.value}`}</span></div>
            <div><b>Description :</b><span style={{  }}>{`${row.description}`}</span></div>
            <div><b>Remediation Recipe :</b><span style={{  }}>{`${row.remediation_recipe}`}</span></div>
            </Box> : null,
        [],
      );
    
      const getDetailPanelHeight = React.useCallback(() => 150, []);

const getTreeDataPath: DataGridProProps['getTreeDataPath'] = !rev_checked?(row) => row.groupings:(row) => row.reverseGrp;
    
  return (
    <div style={{ height: 400, width: '100%' }}>
          <SwitchView checked={checked} handleChange={handleChange} />
          {checked && <SwitchData checked={rev_checked} handleChange={handlerevChange} />}  
        {
           
                <DataGridPro
                {...(checked && { treeData:true })}
                rows={props.rows}
                columns={props.cols}
                getRowId={(r) => r._id}
                getTreeDataPath={getTreeDataPath}
                rowThreshold={0}
                getDetailPanelContent={getDetailPanelContent}
                getDetailPanelHeight={getDetailPanelHeight}
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      // Hide columns status and traderName, the other columns will remain visible
                      remediation_recipe: false,
                      rule: false,
                      operator: false,
                      value: false,
                      description: false,
                    },
                  },
                }}
                
              />

            
        }
      
    </div>
  );
}
