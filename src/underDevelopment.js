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
                <p>We are working on this page.</p>
                <p>It will be availale soon.</p>
            </CardContent>
        </Card>
    )

}