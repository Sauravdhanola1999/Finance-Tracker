import mongoose, { Schema, Document } from 'mongoose';

// Define the Category schema
const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },  // Name of the category (e.g., "Food")
    description: { type: String, default: '' },            // Optional description for the category
    color: { type: String, default: '#000000' },           // Optional color (for UI purposes)
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Define the Category model interface
export interface ICategory extends Document {
  name: string;
  description?: string;
  color?: string;
}

// Create the Category model using the schema
const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', categorySchema);

export default Category;
