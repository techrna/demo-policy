
export const getPolicyData = () => {
    const rows = [
        {
            "id": 220,
            "cis_id": "6.1.1",
            "policy_name": "SYSTEM_FILE_PERMISSION_CHECK",
            "rule": "Audit_system_file_permissions",
            "value": 1,
            "policy_group": "System_Settings",
            "operator": "NE",
            "severity": 5,
            "enabled": false,
            "description": "Audit system file permissions",
            "cis_level": "level 2",
            "remediation_recipe": "Correct any discrepancies found and rerun the audit until output is clean or risk is mitigated or accepted."
        }
    ];
    const cols = [
        { field: 'id', headerName: 'ID', width: 90 },

        {
            field: 'cis_id',
            headerName: 'cis id',
            width: 150,
            editable: true,
        },
        {
            field: 'policy_name',
            headerName: 'policy name',
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
            field: 'policy_group',
            headerName: 'policy group',
            width: 150,
            editable: true,
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
            field: 'cis_level',
            headerName: 'cis level',
            width: 150,
            editable: true,
        },
    ];
    return { cols, rows };
}