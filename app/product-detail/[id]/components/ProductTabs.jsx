"use client";
import React, { useState } from 'react';

export default function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className="product-tabs mt-5">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
                        onClick={() => setActiveTab('additional')}
                    >
                        Additional Information
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews (0)
                    </button>
                </li>
            </ul>

            <div className="tab-content p-4 border border-top-0">
                <div className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}>
                    <div className="product-description">
                        <h3>Product Description</h3>
                        <p>{product.description}</p>
                        <ul className="features-list">
                            <li>High-quality materials</li>
                            <li>Durable construction</li>
                            <li>Modern design</li>
                            <li>Comfortable fit</li>
                        </ul>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === 'additional' ? 'show active' : ''}`}>
                    <div className="additional-info">
                        <h3>Additional Information</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Brand</th>
                                    <td>{product.brand || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Colors</th>
                                    <td>{product.colors?.map(color => color.name).join(', ') || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Sizes</th>
                                    <td>{product.stocks?.map(stock => stock.size.name).join(', ') || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <th>Material</th>
                                    <td>{product.material || 'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`}>
                    <div className="reviews">
                        <h3>Customer Reviews</h3>
                        <div className="no-reviews">
                            <p>There are no reviews yet.</p>
                            <button className="tf-btn btn-fill">Write a Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 