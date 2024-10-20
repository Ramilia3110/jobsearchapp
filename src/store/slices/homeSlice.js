import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  jobs: [], // Holds filtered jobs
  allJobs: [], // Holds all jobs fetched from the server
};

// Async action to fetch all jobs
export const fetchByAllJobs = createAsyncThunk(
  "home/fetchByAllJobs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/jobs.json");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Function to apply filters and return only matching jobs

// const applySearch = (jobs, search) => {
//   const { searchText, company, location, jobType, jobLevel, jobSort } = search;

//   // Apply filters
//   let filteredJobs = jobs.filter((job) => {
//     return (
//       (!searchText ||
//         (job.title &&
//           job.title.toLowerCase().includes(searchText.toLowerCase()))) &&
//       (!company ||
//         (job.company &&
//           job.company.toLowerCase().includes(company.toLowerCase()))) &&
//       (!location ||
//         (job.location &&
//           job.location.toLowerCase().includes(location.toLowerCase()))) &&
//       (!jobType || job.type === jobType) &&
//       (!jobLevel || job.level === jobLevel)
//     );
//   });

//   // Apply sorting logic based on jobSort
//   if (jobSort === "title_asc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.title && b.title ? a.title.localeCompare(b.title) : 0
//     );
//   } else if (jobSort === "title_desc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.title && b.title ? b.title.localeCompare(a.title) : 0
//     );
//   } else if (jobSort === "company_asc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.company && b.company ? a.company.localeCompare(b.company) : 0
//     );
//   } else if (jobSort === "company_desc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.company && b.company ? b.company.localeCompare(a.company) : 0
//     );
//   } else if (jobSort === "location_asc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.location && b.location ? a.location.localeCompare(b.location) : 0
//     );
//   } else if (jobSort === "location_desc") {
//     filteredJobs = filteredJobs.sort((a, b) =>
//       a.location && b.location ? b.location.localeCompare(a.location) : 0
//     );
//   }

//   return filteredJobs;
// };

const applySearch = (jobs, search) => {
  const { searchText, company, location, jobType, jobLevel, jobSort } = search;

  // Apply filters
  let filteredJobs = jobs;

  // Filter by search text (job title or description)
  if (searchText) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        (job.title &&
          job.title.toLowerCase().includes(searchText.toLowerCase())) ||
        (job.desc && job.desc.toLowerCase().includes(searchText.toLowerCase()))
    );
  }

  // Filter by company
  if (company) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company && job.company.toLowerCase().includes(company.toLowerCase())
    );
  }

  // Filter by location within the filtered company
  if (location) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.location &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  // Filter by job type
  if (jobType) {
    filteredJobs = filteredJobs.filter((job) => job.type === jobType);
  }

  // Filter by job level
  if (jobLevel) {
    filteredJobs = filteredJobs.filter((job) => job.level === jobLevel);
  }

  // Apply sorting logic based on jobSort
  if (jobSort === "title_asc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.title && b.title ? a.title.localeCompare(b.title) : 0
    );
  } else if (jobSort === "title_desc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.title && b.title ? b.title.localeCompare(a.title) : 0
    );
  } else if (jobSort === "company_asc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.company && b.company ? a.company.localeCompare(b.company) : 0
    );
  } else if (jobSort === "company_desc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.company && b.company ? b.company.localeCompare(a.company) : 0
    );
  } else if (jobSort === "location_asc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.location && b.location ? a.location.localeCompare(b.location) : 0
    );
  } else if (jobSort === "location_desc") {
    filteredJobs = filteredJobs.sort((a, b) =>
      a.location && b.location ? b.location.localeCompare(a.location) : 0
    );
  }

  return filteredJobs;
};

// Create the slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // Reducer to apply basic filters to jobs
    applySearchToJobs: (state, action) => {
      const filteredJobs = applySearch(state.allJobs, action.payload);
      state.jobs = filteredJobs; // Update the jobs array with filtered results
    },

    clearAllFilters: (state) => {
      state.jobs = state.allJobs; // Reset jobs to all jobs
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchByAllJobs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    addCase(fetchByAllJobs.fulfilled, (state, action) => {
      state.allJobs = action.payload; // Store all jobs fetched from the server
      state.jobs = action.payload; // Initially set filtered jobs to all jobs
      state.loading = false;
    });
    addCase(fetchByAllJobs.rejected, (state, action) => {
      state.error = action.payload || "Something went wrong";
      state.loading = false;
    });
  },
});

export const { applySearchToJobs, clearAllFilters } = homeSlice.actions;

export default homeSlice.reducer;
