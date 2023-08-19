import User from "./userschema";
import dbConnect from "./dbConnect";
export async function getData() {
  // Fetch all data from the collection
  const data = await User.find({});

  return data;
}

export async function createData(newData: any) {
  // Create a new instance of the Data model and save it to the database
  await dbConnect();
  const data = new User(newData);
  await data.save();

  return data;
}
