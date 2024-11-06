import yaml

def load_yaml(file_path):
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def get_course_metadata():
    return load_yaml('data/courses.yaml')

def get_curriculum(course_name):
    file_path = f'data/curriculum/{course_name}.yaml'
    return load_yaml(file_path)
