import { createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit/dist/createSlice';


const initialState = {
    cars : ["Model S","Model 3", "Model X","Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers : {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer