import React, { ChangeEvent, FC, useState } from 'react';

export enum HairColor {
  Blonde = 'Your hair is blonde',
  Brown = 'Your hair is brown',
  Pink = 'Your hair is Pink',
}

interface PersonProps {
  email?: string;
  name?: string;
  age?: number | string;
  hairColor?: HairColor;
}


export const Person: FC<PersonProps> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null>(null)

  type NameType = "Felipe" | "Jack"
  const nameForType: NameType = "Felipe"

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <>
        <h1> This is a Person component</h1>
        <p> This is the {name} of that person </p>
        <p> Here we got the email {email} </p>
        <p> That's this person age {age} </p>
        <input placeholder='Write down your country...' onChange={handleChange}/>
        <div>
          {country} 
        </div>

        <div>
          {hairColor}
        </div>
      </>
    </div>
  );
}
