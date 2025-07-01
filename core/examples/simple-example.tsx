import React, { useState } from 'react';
import {
  ThemeProvider,
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  useThemeMode,
} from 'react-theme-components';

// Import the CSS styles
import 'react-theme-components/dist/index.css';

function SimpleExample() {
  const [name, setName] = useState('');
  const { toggleMode, mode } = useThemeMode();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* Theme Toggle */}
        <div className="text-center">
          <Button onClick={toggleMode} variant="secondary" size="sm">
            Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>

        {/* Simple Card */}
        <Card>
          <CardHeader>
            <CardTitle>Hello React Theme Components!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Your Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <Button 
              variant="primary" 
              fullWidth
              disabled={!name.trim()}
            >
              {name ? `Hello, ${name}!` : 'Enter your name'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Wrap with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <SimpleExample />
    </ThemeProvider>
  );
}

export default App;

