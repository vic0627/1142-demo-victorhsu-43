import {auth} from '@clerk/nextjs/server'
import StoreSignInOut_43 from "./StoreSignInOut_43"

const StorSignInoutAuth_43 = async () => {
  const { userId } = await auth()
  const isAdminUser = userId === process.env.ADMIN_USER_ID;
  return <StoreSignInOut_43 isAdminUser={isAdminUser} />
}

export default StorSignInoutAuth_43
