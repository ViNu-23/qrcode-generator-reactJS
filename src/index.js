import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Card,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Input,
  Container,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";

function Main() {
  function inputValue(){
console.log('hello');
  }
  function getQrCode(){
    console.log('hello');

  }
  return (
    <>
      <div className="container">
        <ChakraProvider>
          <Center h="100vh">
            <Card align="center" boxShadow="2xl" bg="white" m={10} p={10}>
              <CardHeader>
                <Heading color="#2B6CB0">QR Code Generator</Heading>
              </CardHeader>
              <Container>
                <Input variant="outline" placeholder="Type your url" mt={10} onClick={inputValue}/>
              </Container>
              <CardFooter>
                <Button colorScheme="blue" mt={8} size="lg" onClick={getQrCode}>
                  Generate
                </Button>
              </CardFooter>
            </Card>
          </Center>
        </ChakraProvider>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
