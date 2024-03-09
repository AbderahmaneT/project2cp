import React, { useState } from 'react';
import picture from '../../icons/Prisonners.svg';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useJsApiLoader } from "@react-google-maps/api";
import { Select } from '../../components/Map/Select';

const CustomAlert = ({ message, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

function Users() {
    const { isLoaded, loadError } = useJsApiLoader({
      id: process.env.React_APP_GOOGLE_MAPS_API_KEY,
      googleMapsApiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY,
    });
  const initialPrisonners = [
    {
      pic: picture,
      name: 'first',
      age: '34 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'second',
      age:'66 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'third',
      age:'34 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'fourth',
      age:'66 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'fifth',
      age:'34 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'sixth',
      age:'66 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'seventh',
      age:'34 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'eightth',
      age:'66 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'ninth',
      age:'30 years old',
      geofence: [],
    },
    {
      pic: picture,
      name:'tenth',
      age:'40 years old',
      geofence: [],
    },
  ];
  
  const [prisonners, setPrisonners] = useState(initialPrisonners);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrisoner, setSelectedPrisoner] = useState(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    braceletId: '',
    dateOfDetention: '',
    dateOfRelease: '',
    geofence:[],
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const filteredPrisoners = prisonners.filter(prisoner =>
    prisoner.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePrisonerClick = (prisoner) => {
    setSelectedPrisoner(prisoner);
  };

  const handleAddUserClick = () => {
    setOpen(true);
    setStep(1);
  };

  const handleNextClick = () => {
    if (Object.values(formData).some((value) => !value)) {
      setAlertMessage('Please fill in all fields');
      setShowAlert(true);
    } else {
      setStep(2);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
  };

  const handleSaveUser = () => {
    if (Object.values(formData).some((value) => !value)) {
      setAlertMessage('Please fill in all fields');
      setShowAlert(true);
    } else {
      setPrisonners((prevPrisonners) => [...prevPrisonners, formData]);
      setFormData({
        name: '',
        age: '',
        braceletId: '',
        dateOfDetention: '',
        dateOfRelease: '',
        geofence:[],
      });

      setStep(2);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleGeofenceUpdate = (eventType, coordinates) => {
    setPrisonners((prevPrisoners) => {
      const updatedPrisoners = [...prevPrisoners];
      const lastAddedUserIndex = updatedPrisoners.length - 1;
      updatedPrisoners[lastAddedUserIndex].geofence = coordinates;
      return updatedPrisoners;
    });
  };

  return (
    <div className="rounded-lg flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl">User Management</h1>
      <hr style={{ width: '100%', height: '3px', backgroundColor: '#000', margin: '1rem 0' }} />
      <div className="flex flex-row w-full space-x-10 justify-between">
      <div className="w-1/2">
          <TextField
            placeholder="Search by name..."
            variant="outlined"
            className="mt-4 w-full"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ marginRight: '8px', color: '#888888' }} />
              ),
            }}
          />
          <div className="max-h-96 overflow-y-auto mt-4">
          {filteredPrisoners.map((prisoner, index) => (
  <div
    key={index}
    className="flex flex-row my-4 p-4 rounded-3xl bg-[#D9D9D9] cursor-pointer"
    onClick={() => handlePrisonerClick(prisoner)}
  >
    <div>
      <img src={prisoner.pic} alt=''/>
    </div>
    <div className="p-2 border-b border-gray-300">
      <p className="text-lg font-semibold">{prisoner.name}</p>
      <p className="text-sm">{prisoner.age}</p>
      {prisoner.geofence && prisoner.geofence.length > 0 && (
        <div>
          <p>Geofence:</p>
          <ul>
            {prisoner.geofence.map((coordinates, index) => (
              <li key={index}>{`(${coordinates.lat}, ${coordinates.lng})`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
))}

          </div>
        </div>
        <div className="w-1/2">
        <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }} onClick={handleAddUserClick}>Add a User</Button>
          {selectedPrisoner && (
            <div className="bg-[#D9D9D9] mt-4 p-4 rounded-3xl flex  flex-col ">
              <img src={selectedPrisoner.pic} alt='' className="w-1/4"/>
              <div className="flex flex-row justify-between">
                <div>
                  <p>{selectedPrisoner.name}</p>
                  <p>bracelet ID</p>
                </div>
                <div>
                  <p>{selectedPrisoner.age}</p>
                  <p>end of detention</p>
                </div>
              </div>
              <div className="flex flex-row justify-between p-8">
                <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }}>Edit</Button>
                <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }}>Delete</Button>
              </div>
            </div>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: step === 2 ? '90%' : '20%',
                maxWidth: 'none',
                height: step === 2 ? '90%' : '',
                maxHeight: step === 2 ? '90%' : '',
              },
            }}
          >
            <DialogTitle>Add User</DialogTitle>
            <DialogContent sx={{ '& > *': { marginBottom: '1rem' } }}>
              {step === 1 && (
                <div className="flex flex-row">
                  <div className="space-y-4 flex w-full flex-col pr-4">
                  <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} />
              <TextField name="age" label="Age" variant="outlined" value={formData.age} onChange={handleChange} />
              <TextField
                name="braceletId"
                label="Bracelet id"
                variant="outlined"
                value={formData.braceletId}
                onChange={handleChange}
              />
              <TextField
                name="dateOfDetention"
                label="Date of detention"
                variant="outlined"
                value={formData.dateOfDetention}
                onChange={handleChange}
              />
              <TextField
                name="dateOfRelease"
                label="Date of release"
                variant="outlined"
                value={formData.dateOfRelease}
                onChange={handleChange}
              />
                  </div>
                </div>
              )}
              {step === 2 && <Select isLoaded={isLoaded} onGeofenceEvent={handleGeofenceUpdate} />}
            </DialogContent>
            <DialogActions>
              {step === 1 && (
                <>
                  <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }} onClick={handleNextClick,handleSaveUser}>
                    Next
                  </Button>
                  <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }} onClick={handleClose}>
                    Cancel
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <Button style={{ backgroundColor: '#ACAAAA', color: 'black' }} onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    style={{ backgroundColor: '#ACAAAA', color: 'black' }}
                    onClick={() => {
                      setOpen(false);
                      setStep(1);
                    }}
                  >
                    Save
                  </Button>
                </>
              )}
            </DialogActions>
          </Dialog>
          {showAlert && <CustomAlert message={alertMessage} onClose={() => setShowAlert(false)} />}
        </div>
      </div>
    </div>
  );
}

export default Users;
