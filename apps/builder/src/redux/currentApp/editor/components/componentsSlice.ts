import { createSlice } from "@reduxjs/toolkit"
import { ComponentsInitialState } from "@/redux/currentApp/editor/components/componentsState"
import {
  addComponentReducer,
  copyComponentNodeFromDisplayNamesReducer,
  copyComponentNodeReducer,
  deleteComponentNodeReducer,
  resetComponentPropsReducer,
  updateComponentDisplayNameReducer,
  updateComponentDraggingState,
  updateComponentPropsReducer,
  updateComponentReducer,
  updateComponentReflowReducer,
  updateComponentResizeState,
  updateSingleComponentReducer,
} from "@/redux/currentApp/editor/components/componentsReducer"

const componentsSlice = createSlice({
  name: "components",
  initialState: ComponentsInitialState,
  reducers: {
    updateSingleComponentReducer,
    addComponentReducer,
    updateComponentReducer,
    updateComponentDraggingState,
    copyComponentNodeReducer,
    copyComponentNodeFromDisplayNamesReducer,
    updateComponentPropsReducer,
    updateComponentResizeState,
    deleteComponentNodeReducer,
    resetComponentPropsReducer,
    updateComponentDisplayNameReducer,
    updateComponentReflowReducer,
  },
})

export const componentsActions = componentsSlice.actions
export default componentsSlice.reducer
