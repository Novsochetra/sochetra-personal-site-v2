import React from 'react'
import { MyProfile as MyProfileComponent } from '.'
import "./MyProfile.module.css"

export default { title: 'MyProfile' }

export const MyProfile = (): React.ReactElement => {
  return <MyProfileComponent />
}
