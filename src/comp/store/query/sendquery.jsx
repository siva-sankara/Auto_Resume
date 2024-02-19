import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import OpenAI from 'openai';


const initialState = {
  queryResponse: {},
  error: "",
  status: "idle",
};



const openai = new OpenAI({
  apiKey:"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",
  dangerouslyAllowBrowser: true
   // This is also the default, can be omitted
});

// Define the function that returns a promise
// const fetchData = (msgs) => {
//   return new Promise((resolve, reject) => {
//     const interval = 1000;
//     let intervalId;
//     let query = msgs.msgs[msgs.msgs.length - 1];
//     let value = "Reply is " + query.content;
//     let response = {
//       "role" : "system",
//       "content" : value
//     }
//     intervalId = setInterval(() => {
      
//       clearInterval(intervalId);
//       resolve(response);
//     }, interval);
//   });
// };

export const sendQuerydata = createAsyncThunk(
  "senddata/sendQuerydata",
  async (msgs, _thunkApi) => {
    try {
      // let response = await openai.createChatCompletion({ 
        
      //   model: "gpt-3.5-turbo-1106",
      //   temperature: 0,
      //   // max_tokens: 4000,
      //   messages: msgs,
      // });
      // console.log(response);
      // console.log(msgs)

      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        messages: msgs.msgs,
      });
      console.log(chatCompletion.choices[0].message);
      
      return chatCompletion.choices[0].message;
    } catch (error) {
      throw error;
    }
  }
);

export const sendQuerySlice = createSlice({
  name: "sendQuery",
  initialState,
  reducer: {
    clearQuery: (state) => {
      state.status = "idle";
      state.error = null;
      state.queryResponse = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendQuerydata.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(sendQuerydata.fulfilled, (state, action) => {
        state.status = "success";
        state.queryResponse = action.payload;
      })
      .addCase(sendQuerydata.rejected,(state,action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
  },
});

export const { clearQuery } = sendQuerySlice.actions;

export default sendQuerySlice.reducer;
