import React, { useRef, useState } from 'react'
import classes from './styles.module.css'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { Card } from 'primereact/card'
import { Menubar } from 'primereact/menubar';
import PrimeReact from 'primereact/api'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import logo from '../logo.svg'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [text, setText] = useState('')

  const toastRef = useRef<any>()
  PrimeReact.ripple = true

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        },

      ]
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',

        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus'
            },

          ]
        },
        {
          label: 'Archieve',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  const cardStyle = {
    width: "30vw",
    boxShadow: "0px 2px 5px -2px",
    padding: "16px"
  }

  const buttonStyle = {
    width: "5vw"
  }

  const onFormSubmit = (e: any) => {
    if (text) {
      toastRef.current.show({ severity: 'info', summary: text, life: 3000 });
    }

    setText('');

    e.preventDefault();
  }

  const footer = <span>
    <Button type="button" label="Submit" ></Button>
  </span>

  return (
    <div>
      <Toast ref={toastRef} />

      <header className={classes.AppHeader}>
        <h1>AI-Interviewer</h1>
      </header>

      <Menubar
        model={items}
        start={<InputText placeholder="Search" type="text" />}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />

      <div className={classes.Container}>
      <Card>
        <h5>Help Text</h5>
        <div className="p-field" style={{display:"flex", flexDirection:"column"}}>
          <label htmlFor="username1" className="p-d-block">Username</label>
          <InputText id="username1" aria-describedby="username1-help" className="p-d-block" />
          <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
        </div>
      </Card>
      </div>

      <div className={classes.Container}>
        <Card footer={footer} style={{ width: "50vw" }}>
          <div className="p-card-title" style={{ top: 0 }}>
            Login
          </div>

          <h5>Help Text</h5>
          <span className="p-field">
            <label htmlFor="username1" className="p-d-block">Username</label>
            <InputText id="username1" aria-describedby="username1-help" className="p-d-block" />
            <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
          </span>

          <h5>Email</h5>
          <div className="p-field">
            <label htmlFor="email" className="p-d-block">Email</label>
            <InputText id="email" aria-describedby="email-help" className="p-invalid p-d-block" />
            <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
          </div>

          <h5>Password</h5>
          <InputText id="password" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
          <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
          <span className="p-inputtext-lg p-d-block">{password}</span>

        </Card>
      </div>

    </div>

  )
}

export default Login

/*

<div className={"p-fluid p-formgrid p-grid"}>
            <div className={"p-field p-col-4"}>
              <label style={{ marginBottom: "100px" }} htmlFor="email">Email</label>
              <InputText id="email" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className={"p-field p-col-4"}>
              <label htmlFor="password">Password</label>
              <InputText id="password" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>*/