import React, { useEffect, useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    MenuItem,
} from '@mui/material';
import axios from 'axios';
import locationData from '../services/up-area.json'; // Adjust the path accordingly
import api from '../services/api';

const CrimeView = () => {
    const [district, setDistrict] = useState('');
    const [tehsil, setTehsil] = useState('');
    const [policeStation, setThana] = useState('');
    const [crimeRecords, setCrimeRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tehsilOptions, setTehsilOptions] = useState([]);
    const [thanaOptions, setThanaOptions] = useState([]);

    useEffect(() => {
        if (district) {
            // Find the district object by matching the name
            const selectedDistrict = locationData.find(d => d.district === district);
            setTehsilOptions(selectedDistrict ? selectedDistrict.tehsils.map(t => t.name) : []);
            setTehsil('');
            setThana('');
            setThanaOptions([]);
        }
    }, [district]);
    
    
    useEffect(() => {
        if (tehsil && district) {
            // Find the selected district and then the specific tehsil within it
            const selectedDistrict = locationData.find(d => d.district === district);
            const selectedTehsil = selectedDistrict?.tehsils.find(t => t.name === tehsil);
    
            // Set the thanas for the selected tehsil, or set an empty array if not found
            setThanaOptions(selectedTehsil ? selectedTehsil?.thanas : []);
            setThana('');
        }
    }, [tehsil, district]);
    

    

    const fetchCrimeRecords = async () => {
        setLoading(true);
        try {
            const response = await api.get('/crime', {
                params: { district, tehsil, policeStation },
            });
            setCrimeRecords(response.data);
        } catch (error) {
            console.error('Failed to fetch crime records:', error);
            setCrimeRecords([]);
        }
        setLoading(false);
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '5rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
                View Crime Records
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        select
                        label="District"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        {locationData.map((district, index) => (
                            <MenuItem key={index} value={district?.district}>
                                {district?.district}
                            </MenuItem>
                        ))}

                    </TextField>
                </Grid>
                <Grid item xs={4}>
                                <TextField
                    select
                    label="Tehsil"
                    value={tehsil}
                    onChange={(e) => setTehsil(e.target.value)}
                    fullWidth
                    disabled={!district}
                >
                    {tehsilOptions?.map((tehsilName,index) => (
                        <MenuItem key={index} value={tehsilName}>
                            {tehsilName}
                        </MenuItem>
                    ))}
                </TextField>

                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        select
                        label="Thana"
                        value={policeStation}
                        onChange={(e) => setThana(e.target.value)}
                        disabled={!tehsil} // Disable if no tehsil is selected
                    >
                        {thanaOptions.map((thanaName) => (
                            <MenuItem key={thanaName} value={thanaName}>
                                {thanaName}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={fetchCrimeRecords}>
                Filter
            </Button>

            {loading ? (
                <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
                    Loading...
                </Typography>
            ) : (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Crime Number</TableCell>
                                <TableCell>Suspect Name</TableCell>
                                <TableCell>Crime Type</TableCell>
                                <TableCell>Police Station</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {crimeRecords.map((crime) => (
                                <TableRow key={crime._id}>
                                    <TableCell>{crime.crimeNumber}</TableCell>
                                    <TableCell>{`${crime.firstName} ${crime.middleName || ''} ${crime.lastName}`.trim()}</TableCell>
                                    <TableCell>{crime.crimeType}</TableCell>
                                    <TableCell>{crime.policeStation}</TableCell>
                                    <TableCell>{new Date(crime.crimeDate).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" style={{ marginRight: '5px' }}>
                                            View
                                        </Button>
                                        <Button variant="contained" color="secondary">
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default CrimeView;
