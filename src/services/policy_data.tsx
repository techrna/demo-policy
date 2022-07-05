import axios from "axios";



export  const cols = [
    {
        field: 'policy_name',
        headerName: 'policy name',
        width: 150,
        editable: true,
    },
    {
        field: 'policy_group',
        headerName: 'policy group',
        width: 150,
        editable: true,
    },
      {
        field: 'cis_id',
        headerName: 'cis id',
        width: 150,
        editable: true,
    },
     {
        field: 'cis_level',
        headerName: 'cis level',
        width: 150,
        editable: true,
    },
    {
        field: 'rule',
        headerName: 'rule',
        width: 110,
        editable: true,
    },
    {
        field: 'value',
        headerName: 'value',
        sortable: false,
        width: 160,
    },
    {
        field: 'operator',
        headerName: 'operator',
        width: 150,
        editable: true,
    },
    {
        field: 'severity',
        headerName: 'severity',
        width: 150,
        editable: true,
    }, {
        field: 'description',
        headerName: 'description',
        width: 150,
        editable: true,
    }, {
        field: 'remediation_recipe',
        headerName: 'remediation recipe',
        width: 150,
        editable: true,
    }
];

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const getPolicyData = ():Promise<any> => {
  return client.get("/policy")
}