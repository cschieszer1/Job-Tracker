import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
