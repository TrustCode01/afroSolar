# Google Maps API Setup

## Getting a Google Maps API Key

Follow these steps to enable the interactive map on your Afro Solar website:

### 1. Create a Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Click "Select a Project" → "New Project"
- Enter project name (e.g., "Afro Solar") and click "Create"
- Wait for the project to be created

### 2. Enable Maps JavaScript API
- In the Cloud Console, go to **APIs & Services** → **Library**
- Search for "Maps JavaScript API"
- Click on it and select **Enable**

### 3. Create an API Key
- Go to **APIs & Services** → **Credentials**
- Click **Create Credentials** → **API Key**
- Copy the API key

### 4. Restrict the Key (Optional but Recommended)
- Click on your newly created key
- Under **Application restrictions**, select "HTTP referrers (web sites)"
- Add your domain (e.g., `localhost:5174` for local development, your production domain later)
- Under **API restrictions**, select "Maps JavaScript API"
- Click **Save**

### 5. Add the API Key to Your Project
- Open `index.html` in your project
- Find this line:
  ```html
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=marker"></script>
  ```
- Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key
- Save the file

### 6. Test the Map
- Run the dev server: `npm run dev`
- Navigate to the Contact section
- The map should now load with a red marker pinned to the office location

## Troubleshooting

- **Map still not loading?** Check the browser console (F12) for errors.
- **"Billing account required" error?** Enable billing on your Google Cloud project.
- **Map shows blank?** Verify the API key is correctly pasted in `index.html`.

## Customizing the Location

To change the pinned location:
1. Open `src/components/Contact.jsx`
2. Update these values at the top of the component:
   ```javascript
   const lat = 6.5244        // Your office latitude
   const lng = 3.3520        // Your office longitude
   const locationName = '123 Solar Avenue, Lagos, Nigeria'  // Your office address
   ```
3. Save the file and refresh your browser

## Using the Map

- **Get Directions**: Click the "Get Directions" button to open Google Maps navigation in a new tab
- **Zoom**: Use scroll wheel or pinch to zoom
- **Pan**: Click and drag to move around
- **Full Screen**: Click the full-screen button in the top-right corner
- **Street View**: Click the Street View icon to see street-level imagery
