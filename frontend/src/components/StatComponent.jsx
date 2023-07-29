import React from 'react';

const StatComponent = ({ value, icon, description, money }) => {
    return (
        <div className="w-full shadow-lg rounded-xl">
            <div className="p-4">
                <div className="flex items-center mb-2 gap-3">
                    <button
                        className="w-12 h-12 items-center justify-center rounded-full bg-lightModeTextColor"
                    >
                        {icon}
                    </button>
                    <div>
                        <h4 className="text-2xl font-bold mb-1">
                            {money !== '' ? money + value : value}
                        </h4>
                        <p className="text-sm mb-0">{description}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default StatComponent;
