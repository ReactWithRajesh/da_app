import React from "react";
import { Card, Divider, CardContent, CardHeader } from '@mui/material'
import CelebrationIcon from '@mui/icons-material/Celebration';
export default function UnderDevelopment(props) {
    return (
        <Card>
            <CardHeader style={{ height: '20px' }} title='Under Development'></CardHeader>
            <Divider />
            <CardContent style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#00b0ff  ' }}><CelebrationIcon /> *** COMING SOON *** <CelebrationIcon /></h1>
                <p>This aaplication will support Student data managment and list of items.</p>
                <p>We are working on this page.</p>
                <p>It will be available soon.</p>
            </CardContent>
        </Card>
    )

}