import React, { useState } from 'react';
import {
  ThemeProvider,
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
  Spinner,
  Toggle,
  useTheme,
  useThemeMode,
  useResponsive,
} from 'react-theme-components';

// Import the CSS styles
import 'react-theme-components/dist/index.css';

// Theme Toggle Component
function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={toggleMode}
      className="fixed top-4 right-4 z-50"
    >
      {mode === 'dark' ? '☀️' : '🌙'} {mode}
    </Button>
  );
}

// Main Example Component
function ExampleApp() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notifications: false,
  });
  const [loading, setLoading] = useState(false);
  
  const { isMobile } = useResponsive();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">React Theme Components</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive example showcasing all components
          </p>
        </div>

        {/* Alert Example */}
        {showAlert && (
          <Alert
            variant="info"
            closable
            onClose={() => setShowAlert(false)}
            title="Welcome!"
          >
            <AlertDescription>
              This is a comprehensive example of the React Theme Components library.
              Try switching between light and dark themes using the toggle in the top-right corner.
            </AlertDescription>
          </Alert>
        )}

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Various button variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Button Variants */}
            <div className="space-y-2">
              <h4 className="font-medium">Variants</h4>
              <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-2`}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
              </div>
            </div>
            
            {/* Button Sizes */}
            <div className="space-y-2">
              <h4 className="font-medium">Sizes</h4>
              <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-2`}>
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>
            
            {/* Button States */}
            <div className="space-y-2">
              <h4 className="font-medium">States</h4>
              <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-2`}>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth={isMobile}>
                  {isMobile ? 'Full Width (Mobile)' : 'Normal Width'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Input fields and form controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                helperText="We'll never share your email with anyone else"
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                }
                required
              />
              
              <Toggle
                label="Email Notifications"
                description="Receive updates and news via email"
                checked={formData.notifications}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
              />
              
              <Button
                type="submit"
                variant="primary"
                loading={loading}
                fullWidth={isMobile}
                className="mt-6"
              >
                {loading ? 'Submitting...' : 'Submit Form'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>
              Status indicators and labels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Status Badges</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="error">Inactive</Badge>
                <Badge variant="info">New</Badge>
                <Badge variant="primary">Featured</Badge>
                <Badge variant="secondary">Draft</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Badge Variations</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success" dot>With Dot</Badge>
                <Badge variant="warning" outline>Outline</Badge>
                <Badge variant="error" dot outline>Dot + Outline</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Spinner Section */}
        <Card>
          <CardHeader>
            <CardTitle>Loading Spinners</CardTitle>
            <CardDescription>
              Loading indicators in various sizes and speeds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Sizes</h4>
              <div className="flex items-center gap-4">
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Variants & Speeds</h4>
              <div className="flex items-center gap-4">
                <Spinner variant="primary" speed="slow" />
                <Spinner variant="accent" speed="normal" />
                <Spinner variant="success" speed="fast" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Section */}
        <div className="space-y-4">
          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your profile has been updated successfully.
            </AlertDescription>
          </Alert>
          
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please verify your email address to continue.
            </AlertDescription>
          </Alert>
          
          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error processing your request. Please try again.
            </AlertDescription>
          </Alert>
        </div>

        {/* Footer */}
        <Card>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Built with React Theme Components
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Success Modal */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        size="md"
        backdrop="blur"
        animation="scale"
      >
        <ModalHeader>
          <ModalTitle>Form Submitted Successfully!</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div className="space-y-4">
            <p>Thank you for submitting the form. Here's what you entered:</p>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Notifications:</strong> {formData.notifications ? 'Enabled' : 'Disabled'}</p>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              setFormData({ name: '', email: '', notifications: false });
            }}
          >
            Reset Form
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

// Main App with Theme Provider
function App() {
  return (
    <ThemeProvider
      enableSystemTheme={true}
      storageKey="react-theme-components-example"
    >
      <ExampleApp />
    </ThemeProvider>
  );
}

export default App;

