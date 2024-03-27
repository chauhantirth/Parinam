const ENV = {
    "announcement": true,
    "announcementText": "GUJCET Mock Test Result will be Announced on 28th March, 12:00 PM.",
    "backend": "https://rngpit-api.vercel.app/api/v1/result",
    "result": {
        "gujcet": true,
        "ddcet": false
    },
    "footerText": "This Project is Managed by CSE Department, RNGPIT.",
    "pdfCss": {
        "gujcet": {
            'Page': {
                position: 'relative',
            },
            'Text': {
                'StudentName': {
                    position: 'absolute',
                    top: 162, 
                    left: 214,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
                'StudentInstitute': {
                    position: 'absolute',
                    top: 186, 
                    left: 100,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
                'StudentMarks': {
                    position: 'absolute',
                    top: 186, 
                    left: 495,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
            },
            'Image': {
                'result': {
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    width: '100%',
                },
                'ordinary': {
                    position: 'relative',
                    zIndex: -1,
                    top: 0,
                    width: '100%',
                    height: '100%',            
                }
            },
        },
        "ddcet": {
            'Page': {
                position: 'relative',
            },
            'Text': {
                'StudentName': {
                    position: 'absolute',
                    top: 163, 
                    left: 185,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
                'StudentInstitute': {
                    position: 'absolute',
                    top: 187, 
                    left: 124,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
                'StudentMarks': {
                    position: 'absolute',
                    top: 187, 
                    left: 575,
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'GeologicaFamily'
                },
            },
            'Image': {
                'result': {
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    width: '100%',
                },
                'ordinary': {
                    position: 'relative',
                    zIndex: -1,
                    top: 0,
                    width: '100%',
                    height: '100%',            
                }
            },
        }
    }
}

export default ENV