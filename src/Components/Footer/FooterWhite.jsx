import React from 'react'

const p = {
    color: "#4A9AD4",
    fontSize: "13px",
    padding: "1px",
    margin: "7px",
    cursor: "pointer",
    textAlign: "left"
}

const FooterWhite = () => {
    return (
        <>
            <div style={{ width: "73%", margin: "auto", backgroundColor: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
                <div>
                    <p style={p}>Countries</p>
                    <p style={p}>Regions</p>
                    <p style={p}>Cities</p>
                    <p style={p}>Districts</p>
                    <p style={p}>Airports</p>
                    <p style={p}>Hotels</p>
                    <p style={p}>Places of interests</p>
                </div>
                <div>
                    <p style={p}>Homes</p>
                    <p style={p}>Apartments</p>
                    <p style={p}>Resorts</p>
                    <p style={p}>Vilas</p>
                    <p style={p}>Hotels</p>
                    <p style={p}>B&Bs</p>
                    <p style={p}>Guest houses</p>
                </div>
                <div>
                    <p style={p}>Unique places to stay</p>
                    <p style={p}>All destinations</p>
                    <p style={p}>Reviews</p>
                    <p style={p}>Unpacked: Travel articles</p>
                    <p style={p}>Travel communities</p>
                    <p style={p}>Seasonal and holiday deals</p>
                </div>
                <div>
                    <p style={p}>Car rental</p>
                    <p style={p}>Flight finder</p>
                    <p style={p}>Restaurant reservations</p>
                    <p style={p}>Booking.com for Travel Agents</p>
                </div>
                <div>
                    <p style={p}>Coronavirus (COVID-19) FAQs</p>
                    <p style={p}>About Booking.com</p>
                    <p style={p}>Contact Customer Service</p>
                    <p style={p}>Partner help</p>
                    <p style={p}>Careers</p>
                    <p style={p}>Sustainability</p>
                    <p style={p}>Press center</p>
                    <p style={p}>Safety Resource Center</p>
                    <p style={p}>Investor relations</p>
                    <p style={p}>Terms & conditions</p>
                    <p style={p}>Partner dispute</p>
                    <p style={p}>Privacy & cookie statement</p>
                    <p style={p}>Corporate contact</p>
                </div>
        </>
    )
}

export default FooterWhite
