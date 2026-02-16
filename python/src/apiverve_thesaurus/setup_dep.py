from setuptools import setup, find_packages

setup(
    name='apiverve_thesaurus',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Thesaurus is a simple tool for getting word synonyms. It returns a list of synonyms.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://thesaurus.apiverve.com?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
