/*
  # Add RLS policies for Data_HBL_All table

  1. Security Changes
    - Enable RLS on Data_HBL_All table (already enabled)
    - Add policy to allow anyone to read all rows
    - Add policy to allow anyone to insert new rows
    
  Note: Since this is a public data collection system, we're allowing anonymous access
  for both reading and inserting data. In a production environment, you might want
  to restrict this to authenticated users only.
*/

-- Policy to allow reading all rows
CREATE POLICY "Allow public read access"
ON public."Data_HBL_All"
FOR SELECT
TO public
USING (true);

-- Policy to allow inserting new rows
CREATE POLICY "Allow public insert access"
ON public."Data_HBL_All"
FOR INSERT
TO public
WITH CHECK (true);