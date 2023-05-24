# Raspi Printer

<pre>
This project aims at setting up a **Raspberry Pi Zero W** as a printer proxy, to be available to anyone inside the local area network;
Currently it only prints PDF and txt files;
</pre>

## Front-end
<pre>
The front-end was developed using React. It is a simple app, that aims to create a quick web interface in order to upload files to print.
</pre>

## Back-end
<pre>
The back-end was developed using NodeJs and Expres. It is a simple API and process spawner that calls linux CUPS in order to print the current file.
</pre>

<br />
<br />

___
___
___
___

## ***WORK IN PROGRESS***
* Add printer configuration page;
* Add support to other file types;
* Print directly from memory (uploaded file stream);
___
___
___
___

<br />
<br />


## Dependencies
<pre>
Node v18.16.0
A printer added as default to your Raspberry Pi Zero W
</pre>

<br />
<br />


# How to run this project
## Building files:
<pre>
Build front-end files by running the following command inside frontend directory:
</pre>
> <code>npm run build</code>
\
or
\
> <code>yarn build</code>

<br />
<pre>
Copy frontend/build files to backend/public
Then, copy the contents of backend directory to your raspberry pi:
</pre>

> <code> scp -r backend/**/* <pi_user>@<pi_ip_address>:~/<your_directory> </code>

<br />

## Starting server:
<pre>
Log-in into your pi via SSH:
</pre>
> <code>ssh <pi_user>@<pi_ip_address></code>

<br />

<pre>
Navigate to your directory and run:
</pre>
> <code>npm run start</code>
\
or
\
> <code>yarn start</code>


<br /> 
<br /> 


# Printing your files
* Access [<Raspberry_IP>:9999](http://localhost:9999)
* Upload a file and click on **PRINT**