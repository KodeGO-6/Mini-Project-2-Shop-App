import React from 'react'

export const SocialMedia = () => {
  return (
    <div className="d-flex pt-2">
        <strong className="text-dark mr-2">Share on:</strong>
        <div className="d-inline-flex">
            <a className="text-dark px-2" href="">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-dark px-2" href="">
                <i className="fab fa-twitter"></i>
            </a>
            <a className="text-dark px-2" href="">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-dark px-2" href="">
                <i className="fab fa-pinterest"></i>
            </a>
        </div>
    </div>
  )
}
